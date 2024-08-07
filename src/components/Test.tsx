import { cache, createAsync, useLocation } from '@solidjs/router';

// const getRouteUpper = cache(async (url: string) => {
//   'use server';
//   return url.toUpperCase();
// }, 'route');

export default function Test() {
  const location = useLocation();
  // const routeUpper = createAsync(() => getRouteUpper(location.pathname), {
  //   initialValue: null,
  //   deferStream: true,
  // });
  // console.log('Bruh!', Date.now());

  return (
    <div class="p-5">
      Route: {location.pathname}
      {/* Path: {routeUpper()} */}
    </div>
  );
}
