import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = sessionStorage.getItem('token');


  // const excludedUrls = [
  //   'get-profile'
  // ];


  // const shouldSkip = excludedUrls.some(url => req.url.includes(url));

  // if (shouldSkip) {
  //   return next(req);
  // }


  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
