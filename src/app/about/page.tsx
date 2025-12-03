export default function AboutPage() {
  return (
    <div className="grid grid-cols-6 [&>*]:col-start-1 gap-4">
      <h1 className="mb-4">About Me</h1>
      <div className="col-span-2">
        <p>I'm Bryan, a product designer and front-end engineer in Newport, Kentucky. For the last 10 years, I've been building serious tools for serious marketers at Intuit MailChimp, Flagstar Bank, and NaviStone. My curiosity about how businesses can best connect with their customers combines with my knack for solving workflow problems to build software that alleviates the pain of modern marketing.</p>
        <p>These days, I'm thinking a lot about how AI is about to flip the script on business software. How do we build tools that augment human creativity instead of replacing it? How do we make complex systems feel like extensions of thought? These are the questions keeping me up at night (in a good way).</p>
      </div>
    </div>
  );
}