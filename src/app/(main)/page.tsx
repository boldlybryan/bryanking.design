import Image from "next/image";
import Link from "next/link";
import CasePreview from "../components/CasePreview";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex gap-2 items-baseline">
          <h2 className="title mb-2">NaviStone, Inc</h2>
          <p className="opacity-75">(2022–present)</p>
        </div>
        <div className="grid-home mb-8 pb-8 border-b border-neutral-700">
          <CasePreview
            title="Next-gen Prototype"
            description="A Ruby on Rails proof-of-concept to align the business for on the next 10 years"
            image=""
            link="#"
          />
          <CasePreview
            title="Iris Design System"
            description="Lorem ipsum dolor"
            image=""
            link="#"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-baseline">
          <h2 className="title mb-2">Intuit MailChimp</h2>
          <p className="opacity-75">(2021–2022)</p>
        </div>
        <div className="grid-home mb-8 pb-8 border-b border-neutral-700">
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
            image="/thumbnails/mailchimp/marketing-dashboard.png"
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
          <h2 className="title mb-2">Flagstar Bank</h2>
          <p className="opacity-75">(2015–2021)</p>
        </div>
        <div className="grid-home mb-8 pb-8 border-b border-neutral-700">
          <CasePreview
            title="Project Name"
            description="Lorem ipsum dolor"
            image=""
            link="#"
          />
          <CasePreview
            title="Project Name"
            description="Lorem ipsum dolor"
            image=""
            link="#"
          />
          <CasePreview
            title="Project Name"
            description="Lorem ipsum dolor"
            image=""
            link="#"
          />
          <CasePreview
            title="Project Name"
            description="Lorem ipsum dolor"
            image=""
            link="#"
          />
        </div>
      </div>
      <div className="">
        <h2 className="title mb-2">Extracurriculars</h2>
        <div className="grid-home">
          <div className="border border-neutral-500 w-full aspect-16/10 object-fill">
            <Link href="https://stendigcal.vercel.app" target="_blank">
              <Image className="h-full" src="/thumbnails/stendig-calendar.gif" alt="" width={1000} height={1000} />
            </Link>
          </div>
          <div className="border border-neutral-500 w-full aspect-16/10  cursor-pointer">
            <Link href="https://www.bryanking.net/posts/no-more-hog-butchering" className="h-full w-full flex items-center justify-center">No More Hog Butchering</Link>
          </div>
          <div className="border border-neutral-500 w-full aspect-16/10  cursor-pointer">
            <Link href="https://codepen.io/brykng/pen/oywrLv" className="h-full w-full flex items-center justify-center">
            <Image className="h-full" src="/thumbnails/stadttheatre.gif" alt="" width={1000} height={1000} />
            </Link>
          </div>   
        </div>
      </div>
    </div>
  );
}

