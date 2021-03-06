import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { API_BASE_URL } from '../../app.tokens';


export interface Product {
  id: string;
  data_add: string; 
  data_mod: string; 
  nume: string;
  prenume: string;
  nr_tel: string;
  livret: any;
  aparat: any;
  utilizator: any;
  ardere: any;
  categories: string[];
  obs: Obs[];
}
export interface Obs {
  id: number;
  titlu: string;
  detalii: string;
  data_add: string; 
}export interface Livret {
  id: number;
  producator: string;
  tip: string;
  model: string; 
  serie: string; 
  an_fab: string; 
}export interface Aparat {
  id: number;
  tip_comb: string;
  put_nom: string;
  randament: string;
  pres_nom: string; 
  fluid_luc: string; 
}
export interface Utilizator {
  id: number;
  nume: string;
  prenume: string;
  judet: string; 
  oras: string; 
  strada: string; 
  bl: string; 
  sc: string; 
  ap: string; 

  telefon: string; 
  amp_apar: string; 
  detinator: string; 

}
export interface Ardere {
  id: number;
  producator: string;
  tip: string;
  model: string;
  serie: string; 
  an_fab: string; 
  put_maxmin: string; 
  cu_aer: string; 
  tip_comb: string; 
  cu_alim: string; 

}
export interface ProductSearchParams {
  [key: string]: any; // To make compatible with HttpParams type.
  title?: string;
  minPrice?: number;
  maxPrice?: number;
}

export abstract class ProductService {
  abstract getAll(): Observable<Product[]>;
  abstract addProduct(product : Product): Observable<any>;
  abstract updateProduct(product : Product): Observable<Product[]>;
  abstract getById(productId: any): Observable<Product>;
  abstract getAllFirstById(productId: any): Observable<Product[]>;

  abstract getByCategory(category: string): Observable<Product[]>;
  abstract getAllCategories(): Observable<string[]>;
  abstract search(params: ProductSearchParams): Observable<Product[]>;
}

@Injectable()
export class HttpProductService implements ProductService {
  constructor(
    @Inject(API_BASE_URL) private baseUrl: string,
    private http: HttpClient
  ) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/products`);
  }
  addProduct(product : Product): Observable<Product[]> {
    console.log("in service");
    console.log(product);
     
    return this.http.post<Product[]>(`${this.baseUrl}/api/add` ,product);
  }
  updateProduct(product : Product): Observable<Product[]> {
    console.log("in service update");
    console.log(product);
     
    return this.http.put<Product[]>(`${this.baseUrl}/api/add` ,product);
  }
  getById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/api/products/${productId}`);
  }
  getAllFirstById(productId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/productsfirstid/${productId}`);
  }
  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/categories/${category}`);
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/api/categories`);
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/products`, { params });
  }
   
}

// @Injectable()
// export class _StaticProductService implements ProductService {
//   constructor(private http: HttpClient) {}

//   getAll(): Observable<Product[]> {
//     return this.http.get<Product[]>('/data/products.json');
//   }

//   getById(productId: number): Observable<Product> {
//     return this.http.get<Product[]>('/data/products.json').pipe(
//       map(products => <Product>products.find(p => p.id === productId)));
//   }

//   getByCategory(category: string): Observable<Product[]> {
//     return this.http.get<Product[]>('/data/products.json').pipe(
//       map(products => products.filter(p => p.categories.includes(category))));
//   }

//   getAllCategories(): Observable<string[]> {
//     return this.http.get<Product[]>('/data/products.json')
//       .pipe(
//         map(this.reduceCategories),
//         map(categories => Array.from(new Set(categories)))
//       );
//   }

//   search(params: ProductSearchParams): Observable<Product[]> {
//     return this.http.get<Product[]>('/data/products.json').pipe(
//       map(products => this.filterProducts(products, params))
//     );
//   }

//   private reduceCategories(products: Product[]): string[] {
//     return products.reduce((all, product) => all.concat(product.categories), new Array<string>());
//   }

//   private filterProducts(products: Product[], params: ProductSearchParams): Product[] {
//     return products.filter(p => {
//       if (params.title && !p.title.toLowerCase().includes(params.title.toLowerCase())) {
//         return false;
//       }
//       if (params.minPrice && p.price < params.minPrice) {
//         return false;
//       }
//       if (params.maxPrice && p.price > params.maxPrice) {
//         return false;
//       }
//       return true;
//     });
//   }
// }
