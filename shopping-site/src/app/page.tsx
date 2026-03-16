import Image from "next/image";

export default function AmazonProductPage() {
  // Real data from high-end laptop search results
  const product = {
    brand: "ASUS",
    name: "ROG Strix SCAR 16 Gaming Laptop (2025)",
    fullTitle: "ASUS ROG Strix SCAR 16 Gaming Laptop, 16” QHD+ 240Hz, Intel Core Ultra 9 275HX, NVIDIA GeForce RTX 5090, 64GB DDR5, 2TB SSD, Windows 11 Pro",
    price: "449,990",
    mrp: "519,990",
    rating: 4.6,
    reviewCount: "1,059",
    bullets: [
      "ELITE PERFORMANCE: Powered by the Intel Core Ultra 9 processor 275HX and the groundbreaking NVIDIA GeForce RTX 5090 Laptop GPU.",
      "STUNNING VISUALS: 16-inch QHD+ display with ultra-fast 240Hz refresh rate for breathtaking realism and elite speed.",
      "NEXT-GEN COOLING: Features a tool-less chassis design with quick-access mechanism for easy maintenance and liquid metal cooling.",
      "MASSIVE MEMORY: 64GB DDR5 RAM ensures seamless multitasking for professional creators and hardcore gamers alike.",
      "AI ACCELERATED: Built-in AI acceleration for esports and creative applications to dominate both play and productivity."
    ],
    specs: [
      ["Brand", "ASUS"],
      ["Model Name", "ROG Strix SCAR 16"],
      ["Screen Size", "16 Inches"],
      ["Color", "Off-Black"],
      ["Hard Disk Size", "2 TB"],
      ["CPU Model", "Core Ultra 9"],
      ["RAM", "64 GB"]
    ]
  };

  return (
    <div className="min-h-screen bg-white text-[#0F1111] font-sans antialiased">
      {/* Amazon-style Header (Simplified) */}
      <header className="bg-[#131921] px-4 py-2 text-white flex items-center gap-6">
        <div className="text-2xl font-bold py-1 px-2 border border-transparent hover:border-white cursor-pointer">amazon</div>
        <div className="flex-1 max-w-2xl h-10 flex">
          <input type="text" className="w-full rounded-l-md px-4 text-black outline-none" placeholder="Search Amazon" />
          <button className="bg-[#febd69] px-5 rounded-r-md text-black font-bold">🔍</button>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. LEFT COLUMN: IMAGES */}
          <div className="lg:w-[40%] flex gap-4">
            <div className="hidden md:flex flex-col gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 border border-zinc-300 rounded hover:border-[#e77600] cursor-pointer overflow-hidden flex items-center justify-center p-1">
                  <span className="text-xs">💻</span>
                </div>
              ))}
            </div>
            <div className="flex-1 border border-zinc-100 p-4 rounded flex items-center justify-center min-h-[400px]">
               <div className="text-[120px] transform hover:scale-110 transition-transform cursor-zoom-in">💻</div>
            </div>
          </div>

          {/* 2. MIDDLE COLUMN: PRODUCT INFO */}
          <div className="lg:w-[40%] flex flex-col gap-1">
            <nav className="text-xs text-[#565959] mb-2 hover:underline cursor-pointer">
              Visit the ASUS Store
            </nav>
            <h1 className="text-2xl font-medium leading-tight mb-2">
              {product.fullTitle}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#ffa41c] text-sm">★★★★★</span>
              <span className="text-[#007185] text-sm hover:text-[#c45500] cursor-pointer">
                {product.reviewCount} ratings
              </span>
            </div>

            <hr className="mb-4 border-zinc-200" />

            <div className="flex flex-col gap-1 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-red-600 text-2xl font-light">-13%</span>
                <span className="text-3xl font-medium">
                  <span className="text-sm align-top mt-1 inline-block">₹</span>
                  {product.price}
                </span>
              </div>
              <div className="text-[#565959] text-sm">
                M.R.P.: <span className="line-through">₹{product.mrp}</span>
              </div>
              <div className="text-xs mt-1">Inclusive of all taxes</div>
            </div>

            <hr className="mb-4 border-zinc-200" />

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">About this item</h3>
              <ul className="list-disc ml-4 space-y-2 text-sm">
                {product.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. RIGHT COLUMN: BUY BOX */}
          <div className="lg:w-[20%] border border-zinc-300 rounded-lg p-4 h-fit sticky top-20">
            <div className="text-2xl font-medium mb-2">
               <span className="text-sm align-top inline-block">₹</span>
               {product.price}
            </div>
            <div className="text-[#007600] text-sm font-medium mb-4">In stock</div>
            
            <div className="space-y-3 mb-6">
              <div className="text-xs flex justify-between">
                <span className="text-[#565959]">Ships from</span>
                <span>Amazon</span>
              </div>
              <div className="text-xs flex justify-between">
                <span className="text-[#565959]">Sold by</span>
                <span className="text-[#007185]">Appario Retail</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] py-2 rounded-full text-sm font-medium shadow-sm">
                Add to Cart
              </button>
              <button className="w-full bg-[#FFA41C] hover:bg-[#FA8900] py-2 rounded-full text-sm font-medium shadow-sm">
                Buy Now
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-[#007185] cursor-pointer">
              🔒 Secure transaction
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}