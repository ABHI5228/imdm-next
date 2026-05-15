import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Provider from "@/app/Provider";
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'IMDb clone',
  description:'This is movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){try{var c=["class","data-theme"],t=["light","dark"],v=null,d="system",f=null,i=null,m="hybrid",k="theme",n="theme",s=1,fs=0,cs=1,tc=null,dt=null,rrm=1,tg="html";function rt(){var d=document,el=d.documentElement;function rc(n){var p=d.cookie?d.cookie.split('; '):[];for(var i=0;i<p.length;i++){var e=p[i].indexOf('=');if(e<0)continue;if(p[i].substring(0,e)===n){var r=p[i].substring(e+1);if(!r)return null;try{return decodeURIComponent(r);}catch(_){return r;}}}return null;}function rl(k){try{return localStorage.getItem(k);}catch(_){return null;}}function rs(k){try{return sessionStorage.getItem(k);}catch(_){return null;}}var theme=null;if(f){theme=f;}else if(fs&&s){theme='system';}else{var storageMode=m;if(storageMode==='hybrid'){var cookieTheme=rc(n);if(cookieTheme){theme=cookieTheme;}else{var localTheme=rl(k);if(localTheme){theme=localTheme;}}}else if(storageMode==='local'){var local=rl(k);if(local){theme=local;}}else if(storageMode==='session'){var session=rs(k);if(session){theme=session;}}}if(!theme&&i)theme=i;if(!theme)theme=d;if(theme==='system'&&!s)theme=t[0]||'light';var resolvedTheme=theme;if(theme==='system'){resolvedTheme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var applied=v&&v[resolvedTheme]!=null?v[resolvedTheme]:resolvedTheme;var changed=false;for(var ai=0;ai<c.length;ai++){var attr=c[ai];if(attr==='class'){var classNames=[];for(var ti=0;ti<t.length;ti++){var themeName=t[ti];var mappedClass=v&&v[themeName]!=null?v[themeName]:themeName;var classList=mappedClass.split(/\s+/);for(var ci=0;ci<classList.length;ci++){if(classList[ci])classNames.push(classList[ci]);}}if(s){var systemClass=v&&v.system!=null?v.system:'system';var systemClasses=systemClass.split(/\s+/);for(var sci=0; sci<systemClasses.length; sci++){if(systemClasses[sci])classNames.push(systemClasses[sci]);}}var removeClasses=[];for(var ri=0;ri<classNames.length;ri++){if(classNames[ri]&&el.classList.contains(classNames[ri])){removeClasses.push(classNames[ri]);}}for(var rc2=0;rc2<removeClasses.length;rc2++){el.classList.remove(removeClasses[rc2]);changed=true;}var applyClasses=applied.split(/\s+/);for(var ac=0;ac<applyClasses.length;ac++){if(applyClasses[ac]&&!el.classList.contains(applyClasses[ac])){el.classList.add(applyClasses[ac]);changed=true;}}}else{if(el.getAttribute(attr)!==applied){el.setAttribute(attr,applied);changed=true;}}}if(cs&&(resolvedTheme==='light'||resolvedTheme==='dark')){if(el.style.colorScheme!==resolvedTheme)el.style.colorScheme=resolvedTheme;}rt();addEventListener('pageshow',function(e){if(e.persisted)rt();});}catch(e){}}();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Provider>
          <Header />
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <Navbar />
          </Suspense>
          {children}
        </Provider>
      </body>
    </html>
  );
}