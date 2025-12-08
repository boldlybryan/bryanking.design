import Image from "next/image";
import Link from "next/link";
import CasePreview from "../components/CasePreview";

export default function Home() {
  return (
    <div className="container">
      <div className="mt-32 mb-8 pb-8 xl:mt-64 xl:mb-8 xl:pb-16 grid-home border-b border-neutral-700">
        <div className="xl:col-start-3 col-span-2">
          <h1 className="supertitle mb-2">Product Designer & Engineer with 10 years shipping B2B software.</h1>
          <p className="text-lg">Track record of being early: design systems (2017), accessibility (2018), AI tooling (2021).</p>
          <p className="text-lg">Now I prototype in code to de-risk product decisions before they're expensive.</p>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-baseline">
          <h2 className="title mb-6">NaviStone, Inc</h2>
          <p className="opacity-75">(2022–present)</p>
        </div>
        <div className="grid-home mb-8 pb-10 border-b border-neutral-800">
          <CasePreview
            title="Next-gen Prototype"
            description="A Ruby on Rails proof-of-concept to align the business for on the next 10 years"
            image="/thumbnails/navistone/prototype.png"
            link="#"
          />
          <CasePreview
            title="Website Analytics"
            description="Lorem ipsum dolor"
            image="/thumbnails/navistone/website-analytics.jpg"
            link="#"
          />
          <CasePreview
            title="Business Analytics"
            description="Lorem ipsum dolor"
            image="/thumbnails/navistone/business-analytics.jpg"
            link="#"
          />
          <CasePreview
            title="Iris Design System"
            description="Lorem ipsum dolor"
            image="/thumbnails/navistone/design-system.png"
            link="#"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-baseline">
          <h2 className="title mb-6">Intuit MailChimp</h2>
          <p className="opacity-75">(2021–2022)</p>
        </div>
        <div className="grid-home mb-8 pb-10 border-b border-neutral-800">
          <CasePreview
            title="Custom Reports Prototype"
            description="Lorem ipsum dolor"
            image="/thumbnails/mailchimp/custom-report.png"
            link="/work/mailchimp/custom-reports"
          />
          <CasePreview
            title="Analytics Dashboard"
            description="Lorem ipsum dolor"
            image="/thumbnails/mailchimp/marketing-dashboard.png"
            link="/work/mailchimp/analytics-dashboard"
          />
          <CasePreview
            title="Creative Assistant Onboarding"
            description="Lorem ipsum dolor"
            image="/thumbnails/mailchimp/import-brand.png"
            link="/work/mailchimp/creative-assistant-onboarding"
          />
          <CasePreview
            title="Creative Assistant Sample Brand"
            description="Lorem ipsum dolor"
            image="/thumbnails/mailchimp/sample-brand.png"
            link="/work/mailchimp/creative-assistant-sample"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-baseline">
          <h2 className="title mb-6">Flagstar Bank</h2>
          <p className="opacity-75">(2015–2021)</p>
        </div>
        <div className="grid-home mb-8 pb-10 border-b border-neutral-800">
          <CasePreview
            title="Flagstar.com Redesign"
            description="Lorem ipsum dolor & accessibility overhaul"
            image="/thumbnails/flagstar/home-page.png"
            link="#"
          />
          <CasePreview
            title="Flagstar.com Search"
            description="Lorem ipsum dolor"
            image="/thumbnails/flagstar/search-results.png"
            link="#"
          />
          <CasePreview
            title="Regionalization Interstitial"
            description="Lorem ipsum dolor"
            image="/thumbnails/flagstar/product-page.png"
            link="#"
          />
          <CasePreview
            title="Branch & ATM Locator"
            description="Lorem ipsum dolor"
            image="/thumbnails/flagstar/locator.png"
            link="#"
          />
        </div>
      </div>
      <div className="">
        <h2 className="title mb-6">Extracurriculars</h2>
        <div className="grid-home mb-8 pb-10">
          <div className="border border-neutral-800 w-full aspect-16/10 object-fill">
            <Link href="https://stendigcal.vercel.app" target="_blank">
              <Image className="h-full" src="/thumbnails/stendig-calendar.gif" alt="" width={1000} height={1000} />
            </Link>
          </div>
          <div className="border border-neutral-700 w-full aspect-16/10  cursor-pointer">
            <Link href="https://www.bryanking.net/posts/no-more-hog-butchering" className="h-full w-full flex items-center justify-center">No More Hog Butchering</Link>
          </div>
          <div className="border border-neutral-700 w-full aspect-16/10  cursor-pointer">
            <Link href="https://codepen.io/brykng/pen/oywrLv" className="h-full w-full flex items-center justify-center">
            <Image className="h-full" src="/thumbnails/stadttheatre.gif" alt="" width={1000} height={1000} />
            </Link>
          </div>  
          <div className="border border-neutral-700 w-full aspect-16/10  cursor-pointer">
            <Link href="https://codepen.io/collection/AZyZMQ?cursor=eyJwYWdlIjoxfQ==" className="h-full w-full flex items-center justify-center">
              CodePen Cincinnati Presentations
            </Link>
          </div>             
        </div>
      </div>
    </div>
  );
}

