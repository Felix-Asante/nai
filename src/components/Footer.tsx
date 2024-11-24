import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-300 text-neutral-100 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold">About Us</h4>
          <p>Noble Alms International transforms lives with joy.</p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Events", "Donate", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p>noblealmsi@gmail.com</p>
          <p>+233(0)2412111928</p>
        </div>
        <div>
          <h4 className="font-bold">Follow Us</h4>
          <p>Social media links go here</p>
        </div>
      </div>
      <p className="text-center mt-8">
        © 2024 Noble Alms International. All rights reserved.
      </p>
    </footer>
  );
}
