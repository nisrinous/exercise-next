export default function Footer(): JSX.Element {
  return (
    <div className="bg-[#D84727] w-full h-[700px] mt-20">
      <div className="bg-[#DA5E42] w-full h-[273px] items-center my-14">
        <div className="flex flex-col justify-center h-full px-10 md:px-32 xl:px-80">
          <ul className="flex flex-row justify-evenly">
            <li>
              <img src="/25imagebni.png"></img>
            </li>
            <li>
              <img src="/26imagepermata.png"></img>
            </li>
            <li>
              <img src="/27imagemc.png"></img>
            </li>
            <li>
              <img src="/28imagedanamon.png"></img>
            </li>
            <li>
              <img src="/29imagevisa.png"></img>
            </li>
          </ul>
          <ul className="flex flex-row justify-evenly">
            <li>
              <img src="/32imagemandiri.png"></img>
            </li>
            <li>
              <img src="/33imagekredivo.png"></img>
            </li>
            <li>
              <img src="/34imageuob.png"></img>
            </li>
            <li>
              <img src="/35imagegopay.png"></img>
            </li>
            <li>
              <img src="/36imagesc.png"></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-10 xl:px-[26rem] text-white">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <ul>
              <li>
                <img className="mb-8" src="/logofooter.png"></img>
              </li>
              <li>
                <p className="text-xl font-medium">Address</p>
              </li>
              <li>
                <p className="mb-10">
                  Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                  Sukasari, Bandung, Jawa Barat, Indonesia 40152
                </p>
              </li>
              <li>
                <p className="text-xl font-medium">Office Hour</p>
              </li>
              <li>
                <p>Monday - Sunday</p>
              </li>
              <li>
                <p>10.00 - 18.00</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li>
                <p className="text-2xl font-semibold">Get in touch</p>
                <div className="w-16 border-b-[1px] border-white mb-5"></div>
              </li>
              <li>
                <p>Address</p>
              </li>
              <li>
                <p>
                  Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                  Sukasari, Bandung, Jawa Barat, Indonesia 40152
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li>
                <p className="text-2xl font-semibold">Useful link</p>
                <div className="w-16 border-b-[1px] border-white mb-5"></div>
              </li>
              <li>
                <p>Address</p>
              </li>
              <li>
                <p>
                  Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                  Sukasari, Bandung, Jawa Barat, Indonesia 40152
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li>
                <p className="text-2xl font-semibold">Campaign</p>
                <div className="w-16 border-b-[1px] border-white mb-5"></div>
              </li>
              <li>
                <p>Address</p>
              </li>
              <li>
                <p>
                  Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                  Sukasari, Bandung, Jawa Barat, Indonesia 40152
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
