export function getDirectory(
  routes: any[],
  currentPath = '/',
  res: any[] = []
) {
  if (!routes || !routes.length) return res;
  for (let route of routes) {
    if (hasPath(route.children, currentPath)) {
      res.push(route.path);
      getDirectory(route.children, currentPath, res);
    }
  }
  return res;
}

export function hasPath(routes: any[], currentPath = '/'): boolean {
  if (!routes || !routes.length) return false;
  for (let route of routes) {
    if (route.path === currentPath) {
      return true;
    }
    if (route.children && route.children.length) {
      return hasPath(route.children, currentPath);
    }
  }
  return false;
}
