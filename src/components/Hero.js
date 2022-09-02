import MobileNav from './MobileNav';
import Navlink from './NavLink';

const Hero = () => {
   return (
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
         <MobileNav />
         <div className="hidden md:block border-b border-white/10 py-3">
            <div className="container">
               <nav className=" md:w-full sm:w-2/3 flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                     <a href="#" className="text-white font-semibold  mr-8">
                        ResultOption
                     </a>
                     <Navlink href="#about">About us</Navlink>
                     <Navlink href="#portfolio">Projects</Navlink>
                     <Navlink href="#contact">Contact</Navlink>
                  </div>
                  <div className="flex items-center gap-x-2">
                     <span className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg">
                        <svg
                           role="img"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                           width="40"
                           className="fill-current"
                        >
                           <title>XFCE</title>
                           <path d="M.121 5.7271a.104.104 0 0 0-.0344.0017v-.0003l-.0154.0024-.0138.0076a.1156.1156 0 0 0-.0486.053.1147.1147 0 0 0-.0065.067c.0073.0362.0229.0552.0392.0754.0326.0403.0783.0798.1424.1286.1282.0976.3274.2256.5973.379.5396.3065 1.3597.7126 2.4276 1.1523 1.0533.4336 2.3185 1.2056 3.2863 1.9117.4838.353.8938.6902 1.165.9572.1356.1336.2365.2504.2924.337.028.0433.0443.0791.0498.1003.0027.0106.0029.0158.003.0176-.6994.9875-1.1131 2.187-.8297 4.1959l.0003.0003v.0002c.0055.0378-.0317.1266-.1203.2349-.0886.1082-.2168.2333-.3462.3656-.1294.1324-.2604.2723-.3573.4192-.0968.1469-.1629.3058-.138.4716v.0005l.0002.0005c.0122.074.062.1403.1251.1684.0632.0281.1297.0276.1987.0184.1379-.0185.295-.0788.4534-.1449.1584-.066.3168-.1387.4379-.1832a.7913.7913 0 0 1 .1308-.0376c-.0002.021.0023.0308-.0032.0646-.0102.0611-.0291.1386-.0536.2251-.0488.173-.1194.3824-.1843.5878-.0648.2054-.1239.4059-.15.57-.013.082-.0188.155-.008.2219.0107.0669.0489.1414.1224.1683l.0027.0011.0027.0009c.0509.015.0835.0012.1164-.0117a.6625.6625 0 0 0 .1038-.054c.0748-.046.1643-.1118.2657-.1916.2027-.1596.4515-.3752.697-.5916.2455-.2164.4874-.4336.6734-.5937.093-.08.1723-.146.2292-.1892a.8072.8072 0 0 1 .0624-.044c1.4976.4462 3.2026.5014 4.5489.4407a20.9787 20.9787 0 0 0 1.6869-.144c.2111-.027.3812-.0525.5013-.0722.06-.0099.1076-.0183.1419-.0249a1.1699 1.1699 0 0 0 .033-.0068l.0002.0003c.0194.0085.049.022.087.0392l.3181.1443c.265.12.6217.28.9867.4357.365.1556.7378.3069 1.0378.4102.15.0517.2812.0913.3875.1138.0531.0112.1.0184.1427.0197.0426.0012.0828.001.1273-.0281l.0095-.0062.0078-.0084c.1755-.19.183-.4255.0992-.6327-.0839-.2072-.2455-.4023-.4127-.5864-.1672-.1841-.3415-.3571-.45-.4989-.0542-.0709-.0909-.1342-.1043-.1783-.0118-.039-.0065-.053.0057-.0711a.2403.2403 0 0 1 .0505 0c.0583.0053.1458.0236.2484.0508.2052.0544.4736.1441.7421.2324.2685.0883.5367.1751.7497.2251.1065.025.1982.0413.2764.0422.0392.0004.0754-.0023.112-.0152.0365-.0128.0778-.0424.0956-.0875l.0008-.0022.0008-.0024c.0502-.1516-.0056-.3138-.0951-.4762-.0895-.1624-.2203-.3305-.3594-.4927-.1393-.1621-.287-.3178-.4093-.449-.1217-.1307-.2194-.2425-.2494-.2922-.062-.1099-.1004-.2568-.083-.3986.0174-.142.0849-.2801.2475-.3935.032-.0223.1324-.0749.2681-.14.1358-.0651.311-.1464.5108-.24.3995-.1873.8972-.425 1.3802-.6902.4829-.2653.9507-.5574 1.2937-.8589.3427-.3013.5755-.6187.5291-.948-.0722-.5354-.425-.9433-.8964-1.2494-.4714-.3061-1.0654-.5177-1.6504-.6716-.585-.1538-1.1615-.2492-1.5953-.3167-.217-.0337-.3984-.0603-.5251-.0835a1.5818 1.5818 0 0 1-.144-.0316h-.0003a4.2196 4.2196 0 0 1-.0003-.0878c.0006-.0827.0018-.1971 0-.3308-.0035-.2674-.0186-.612-.0746-.9416-.056-.3297-.1499-.6458-.3319-.8597-.1817-.2136-.4698-.3041-.8207-.1656-.2319.0867-.3625.2882-.4175.5189-.0551.231-.0452.4976-.0095.7594.0357.2618.0984.5187.155.7248.0568.206.1093.3695.1187.4113v.0003c.006.026.0051.0173-.0049.0254-.01.008-.0423.021-.0832.0246a.4074.4074 0 0 1-.126-.0098c-.0373-.0092-.0626-.0292-.0575-.023-.0078-.0095-.0375-.0606-.0695-.1286-.0319-.068-.0701-.1557-.1137-.2548-.087-.1982-.195-.4413-.3197-.67-.1247-.2286-.2647-.4431-.4283-.587-.0818-.0719-.171-.1269-.2695-.151a.4444.4444 0 0 0-.3064.0362l-.0016.0008-.0016.0014c-.2555.1408-.3929.3651-.449.607-.056.2417-.0374.502.0033.7437.0407.2416.1046.4659.1454.6286.0204.0813.0347.1484.0381.1867.0011.0127.0005.0142.0003.0181-.1823.114-.275.2937-.346.4789-.0744.194-.1365.397-.2634.5732l-.0006.0005-.0003.0006c-.0384.055-.1194.1045-.2464.1375-.127.033-.2952.049-.4908.0495-.3912.0008-.891-.059-1.412-.1419-1.042-.1656-2.1617-.4221-2.7331-.4567-.4299-.0254-.8375.1359-1.1459.2875-.1542.0759-.2843.15-.3764.1979a.8919.8919 0 0 1-.0957.0443c-.9968-.9934-3.013-2.6882-5.2499-3.2603-.6133-.1664-1.3873-.4945-2.015-.7794-.3138-.1425-.5914-.2741-.7958-.3697a11.373 11.373 0 0 0-.2481-.1138 1.4159 1.4159 0 0 0-.0776-.0316.3291.3291 0 0 0-.0305-.01C.132 5.7309.128 5.7286.121 5.7274zm22.6994 1.8353a.0621.0621 0 0 0-.0182.0046c-.0199.0086-.0256.0186-.0313.0268a.2303.2303 0 0 0-.026.0537c-.0158.0423-.033.1017-.0516.1754-.0371.1474-.0786.3496-.1137.5565-.0352.2068-.0639.4179-.0744.5845-.0052.0834-.0062.1552-.0002.2125a.3184.3184 0 0 0 .016.0764.106.106 0 0 0 .0475.0587.0745.0745 0 0 0 .0435.013.0789.0789 0 0 0 .043-.0176c.0206-.0163.031-.0348.0418-.0565.0218-.0434.0407-.1023.0598-.1757.0382-.1468.0746-.3488.1035-.5567.0289-.2078.0501-.421.0567-.5897.0033-.0843.0031-.157-.0022-.2145a.4137.4137 0 0 0-.0127-.0757.1082.1082 0 0 0-.036-.0587c-.0063-.006-.013-.0127-.0242-.0156a.061.061 0 0 0-.0214-.0014zm1.111.2114a.104.104 0 0 0-.0428.0075c-.0233.0095-.0431.024-.0645.0422-.0429.0365-.0908.0899-.1444.157-.107.1342-.2336.3218-.35.5178-.1162.196-.222.3999-.2864.5686-.0322.0844-.0545.1597-.0616.2246-.0071.0647-.0006.1294.051.1678.0286.0211.0674.015.0898.0035.0225-.0115.0403-.0275.0597-.0475.0388-.04.0812-.0975.1284-.1687.0944-.1424.2056-.3388.311-.5402a9.6877 9.6877 0 0 0 .2754-.5673 2.732 2.732 0 0 0 .0806-.2002.522.522 0 0 0 .0191-.0673A.1276.1276 0 0 0 24 7.8419c-.0002-.0112.0007-.0282-.0191-.0479l-.002-.0019-.0015-.0016a.0757.0757 0 0 0-.046-.0167zM19.5691 9.629c.1818 0 .3346.1698.3346.3876 0 .2177-.1528.3872-.3346.3872-.1817 0-.3345-.1695-.3345-.3872 0-.2178.1528-.3876.3345-.3876zm-.8823.3395c.0791.2909.1785.5128.35.6475.1629.128.3965.1727.6894.1813-.1803.129-.3447.1912-.4803.1751-.168-.0198-.3091-.1247-.414-.2686s-.1708-.3257-.1867-.483c-.011-.1075.0095-.1888.0416-.2523zm2.0906 1.7806c.0534-.0043.083.0061.0911.0138l.0084.0081.011.0041c.0068.0024.0032.0004.0055.002-.0108.016-.0496.0531-.1124.0929-.1312.083-.3492.1845-.5792.2778-.23.0933-.473.1791-.6578.2349-.059.0178-.098.0261-.1424.037.029-.0212.0513-.0392.0894-.0646a6.3595 6.3595 0 0 1 .5192-.306c.1948-.103.3971-.1968.5602-.2513.0816-.0272.1536-.0443.207-.0486zm.2406.4714a.0686.0686 0 0 1 .0248.0022c.0265.0305.0393.0587.0349.0964-.005.0422-.0289.0957-.0708.1538-.084.1161-.2354.2477-.3984.3667-.163.1191-.3378.2268-.4702.3027-.0483.0277-.0822.0454-.1165.0635.0153-.0296.029-.0579.0562-.0983.0782-.1163.1994-.266.3319-.409.1325-.1428.2771-.2796.4005-.3702.0617-.0453.1184-.0788.1624-.0962a.1569.1569 0 0 1 .0451-.0116z" />
                        </svg>
                     </span>
                  </div>
               </nav>
            </div>
         </div>
         <div className="container">
            <div className=" w-full md:w-2/3 lg:px-0 sm:px-10  ">
               <header className="text-white py-4 md:py-16 sm:py-8">
                  <h1 className="text-xl md:text-3xl font-bold">
                     Let us build your app. Innovate & build modern apps using
                     latest technology
                  </h1>
                  <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
                     <a
                        href="#"
                        className="underline decoration-sky-500 text-sky-400 font-medium"
                     >
                        Dolorem quam
                     </a>
                     , Research Existing Solutions. The app development process
                     must start with clearly defined goals. , recusandae quis
                     dolorum veritatis nulla, nemo consequuntur temporibus
                     quisquam expedita libero est facere ipsum laboriosam
                     eveniet itaque. Rem, dicta temporibus?
                  </p>
               </header>
            </div>
         </div>
      </div>
   );
};

export default Hero;
