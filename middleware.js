import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let defaultLocale = 'en'
let locales = ['bn', 'en']


function getLocale(request) 
{
   // url a j request ta asbe setar modhe accept-language name ekta property thakbe 
    const acceptedLanuage = request.headers.get('accept-language') ?? undefined;

    // ekhne dekhbo ei langauge ta amader locales er j lanuage er modhe ase tar sateh mile naki
     
    let headers ={"accept-language":acceptedLanuage}

    let langauges = new Negotiator({headers}).languages()

    return match(langauges, locales, defaultLocale)

}

// ekhn likbo middleware ta vlo kre ...

export function middleware(request) 
{
    // eta server side a use hoy
    const pathname = request.nextUrl.pathname;
}