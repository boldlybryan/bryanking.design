export default function QueryPage() {
  return (
    <div className="border-t border-neutral-800 pt-4">
      <h1 className="ml-3 mb-10">Add attributes to build your segment</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 grid grid-cols-subgrid">
          <select className="p-2 text-3xl border-b border-neutral-500 hover:bg-neutral-500 cursor-pointer">
            <option value="1">Age</option>
            <option value="2">Gender</option>
            <option value="3">Income</option>
            <option value="4">Education</option>
          </select>
          <select className="p-2 text-3xl border-b border-neutral-500 hover:bg-neutral-500 cursor-pointer">
            <option value="1">is</option>
            <option value="2">is not</option>
            <option value="3">greater than</option>
            <option value="4">less than</option>
          </select>
          <input type="text" className="p-2 text-3xl border-b border-neutral-500 hover:bg-neutral-500 cursor-pointer" placeholder="placeholder"/>
        </div>
        <button className="self-center w-8 h-8 border border-neutral-700 cursor-pointer">+</button>
      </div>
    </div>
  );
}