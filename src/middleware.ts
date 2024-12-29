import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from 'next/server';

export default function middleware(req: NextRequest): Promise<any> | ((...args: any[]) => Promise<any>) {
  return withAuth(req);
}
export const config = {
  matcher: ["/admin/","/admin/upload","/admin/edit"]
};