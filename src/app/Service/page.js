import Link from "next/link";


export default function Service() {
    return (
        <div>
            <div className="m-5">
      <nav>
         <h1 className="text-center text-3xl md:float-left">Nexora-Store</h1>
        <nav className="float-right space-x-7">
          <Link href="/About" className="text-3xl">About</Link>
          <Link href="/Service" className="text-3xl">Service</Link>
        </nav>
      </nav>
        
       
    </div>
            <h1>Hello, World!</h1>
        </div>
    );
}