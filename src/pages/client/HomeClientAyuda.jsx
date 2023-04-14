import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
	const menus = [
		{ name: "dashboard", link: "/", icon: MdOutlineDashboard },
		{ name: "user", link: "/", icon: AiOutlineUser },
		{ name: "messages", link: "/", icon: FiMessageSquare },
		{ name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
		{ name: "File Manager", link: "/", icon: FiFolder },
		{ name: "Cart", link: "/", icon: FiShoppingCart },
		{ name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
		{ name: "Setting", link: "/", icon: RiSettings4Line },
	];
	const [open, setOpen] = useState(true);
	return (
		<section className="flex gap-6">
			<div className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
				<div className="py-3 flex justify-end">
					<HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
				</div>
				<div className="mt-4 flex flex-col gap-4 relative">
					{menus?.map((menu, i) => (
						<Link
							to={menu?.link}
							key={i}
							className={` ${
								menu?.margin && "mt-5"
							} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
							<div>{React.createElement(menu?.icon, { size: "20" })}</div>
							<h2
								style={{
									transitionDelay: `${i + 3}00ms`,
								}}
								className={`whitespace-pre duration-500 ${
									!open && "opacity-0 translate-x-28 overflow-hidden"
								}`}>
								{menu?.name}
							</h2>
							<h2
								className={`${
									open && "hidden"
								} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
								{menu?.name}
							</h2>
						</Link>
					))}
				</div>
			</div>
			<div className="m-3 text-xl text-gray-900 font-semibold">
				REACT TAILWIND
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit provident iste harum ex sint
					doloremque tempore ipsam rerum! Saepe soluta sint quidem quae. Quis, eligendi commodi. Expedita
					sequi optio libero! Non ratione dolorum officiis, ad ipsum at eaque facere suscipit inventore animi
					magni iure voluptatem culpa quam maxime dolorem in debitis. Quidem numquam omnis, inventore
					exercitationem ipsam dicta hic accusamus. Sequi enim reiciendis iste? Dicta asperiores autem
					deserunt saepe inventore sed nihil eum enim, ut soluta fugiat odit, libero ex, nemo ducimus
					veritatis. Aliquam nobis eveniet delectus accusantium est tempora. Adipisci voluptates neque earum
					cum, fuga corporis animi dolorum eum labore deserunt sed molestias exercitationem temporibus qui
					reprehenderit amet ab aperiam quasi commodi. Fugit veniam sequi distinctio facere nam illo. Maxime
					provident velit sequi, nostrum vitae nulla dolorum eaque error laborum repudiandae! Maxime commodi
					molestias deleniti, fuga aspernatur unde, adipisci beatae eos error dignissimos totam odio,
					doloremque reiciendis quod inventore. Numquam deleniti earum nulla voluptas sit dolorum quod iusto
					quisquam totam rerum eos reprehenderit hic asperiores laborum voluptatem odio quo cum aliquid, saepe
					vero deserunt! Pariatur blanditiis voluptate beatae aut? At earum recusandae praesentium molestiae.
					Deleniti explicabo et ratione maxime amet, quia sequi libero soluta veritatis corrupti blanditiis
					voluptates officiis dolorum, omnis nisi. Vero tenetur beatae optio sed labore autem? Possimus quos
					ex iste optio deserunt laboriosam explicabo nam quo molestias vero eos atque itaque adipisci ipsum
					delectus, odio suscipit expedita dolorum odit qui. Vel accusantium provident quibusdam minus eos.
					Repellendus consequatur eos aliquid expedita commodi consectetur tempore nam facere perspiciatis id
					nulla ullam nemo voluptatem, impedit, autem tempora quasi, nostrum delectus quos? Labore praesentium
					optio vero! Quaerat, quos voluptates. Fuga explicabo dolore voluptate porro ab quasi, esse ratione
					sapiente! Animi non, voluptas dolore amet ab quod ducimus. Inventore, dolores! Harum perferendis
					distinctio ex, cumque necessitatibus beatae vero mollitia consectetur. Ipsa harum hic fugiat id
					vitae velit! Quae, nisi. Est, sint ad modi minima consectetur quis distinctio rem necessitatibus
					optio ducimus suscipit dolorum in fuga iusto, eius eligendi recusandae mollitia. Mollitia itaque
					eaque modi nobis! Quae repellat repellendus rerum dolores eaque doloribus, cupiditate quam
					accusantium quos nostrum ut sapiente voluptatum perferendis enim distinctio, officia doloremque a
					quia eum animi. Explicabo? Debitis, quas hic rerum laborum nisi delectus dicta et. Sint dolor nemo
					at tempore reprehenderit distinctio numquam ipsa quae? Aspernatur eum necessitatibus explicabo atque
					tempora adipisci porro, nihil suscipit unde? Nemo, commodi. Cum deleniti pariatur omnis, quam
					molestias voluptatum cupiditate reprehenderit velit eos incidunt laboriosam excepturi sed quod nemo
					nihil? Ullam a voluptatum enim rerum consequuntur explicabo modi quis necessitatibus. Iste autem
					molestiae adipisci fuga reprehenderit rem necessitatibus voluptate corrupti eligendi voluptatibus ad
					placeat sed magni aliquid tempore molestias distinctio libero neque velit cupiditate eos impedit,
					laborum quae hic! Doloribus! Officiis sit hic ut dolore voluptas consectetur consequatur
					necessitatibus libero iste accusantium eveniet, fugiat illum quia asperiores facilis. Veniam facere
					minus laborum explicabo assumenda suscipit necessitatibus! Temporibus necessitatibus impedit error!
					Reprehenderit, vero laboriosam. Dolores, deleniti vitae alias consequuntur nostrum quos quod labore
					odit magni distinctio ex perferendis blanditiis delectus culpa. Vel, incidunt quibusdam! Optio
					voluptas explicabo maxime beatae nisi modi? Ratione voluptas iure aperiam cumque quidem beatae
					soluta! Sint quasi quas, officia ad, dolor nemo fuga, commodi vel adipisci eum ipsa. Voluptas eos
					totam reiciendis impedit! Vitae adipisci voluptatibus in. Ipsam maiores delectus eveniet non dolorem
					culpa ipsa incidunt! Vitae labore omnis, ab asperiores unde delectus iste, est eaque sapiente alias
					ullam iure fuga ea modi, consectetur ex animi architecto. Ipsa dicta laborum, doloribus alias
					quaerat illo sequi tenetur molestias molestiae eos doloremque vitae iure dolorum rerum assumenda
					nulla sunt cum voluptates, animi voluptatibus sapiente pariatur? Recusandae provident voluptatibus
					doloremque! Ducimus laboriosam fuga nihil dolore tempora sed asperiores quis, quos eos eaque
					aperiam, velit rerum qui cupiditate possimus quidem culpa sapiente accusamus vero, nesciunt animi!
					Libero laudantium veniam explicabo fugit? Corrupti, obcaecati repellendus! Fugiat non debitis beatae
					consequuntur sunt ratione eaque possimus animi, natus delectus similique necessitatibus totam
					provident culpa, maxime unde modi saepe dolore quod vel quibusdam repudiandae amet. Consequuntur
					quis dolor similique, eveniet exercitationem aut quos mollitia aspernatur cumque dicta fugiat ipsa
					autem ad sunt assumenda id qui placeat necessitatibus, doloribus eligendi voluptas perspiciatis
					impedit molestiae temporibus. Quis! Et veritatis laboriosam error ipsum esse earum ratione odit
					mollitia iusto harum molestiae quisquam perferendis officiis eos delectus reiciendis nam cupiditate
					commodi nisi, fugiat deserunt eveniet possimus! Commodi, voluptatibus minima? Recusandae aut nulla
					dolorum voluptas aperiam beatae at ratione, ipsa dolor obcaecati vitae autem, magnam sapiente
					ducimus sequi error eos modi! Porro facere necessitatibus tempora neque ut, animi molestiae.
					Dolorem. Aspernatur facere incidunt dignissimos itaque consectetur ea odit commodi vero quis
					molestiae, ratione libero similique corrupti dolore eaque, aliquid tenetur. Fugiat, eum. Est,
					voluptatibus eius. Numquam debitis dicta alias non. Ad id dolorum numquam repellendus. Earum
					dignissimos libero provident quo aliquid voluptates dolore vero error eius eum officiis, autem harum
					voluptatibus illum. Libero dignissimos illo fugit assumenda nesciunt consectetur esse? Nihil
					asperiores perspiciatis minus tempore adipisci velit dolore, harum ut voluptates, tempora laudantium
					magni sint reiciendis. Soluta, rem dolor distinctio dolorem sunt cum nulla et tempore commodi
					possimus temporibus provident! Quibusdam assumenda, unde, ex culpa dolore cum consequatur
					blanditiis, commodi sit similique doloribus. Nam modi, voluptate dolorum, maxime explicabo alias
					possimus praesentium quia vitae sapiente, beatae velit temporibus blanditiis quis. Debitis aut,
					accusamus dolor quo maxime suscipit voluptatum aliquid quidem autem sapiente qui dolorum quos vero
					assumenda nobis! Sapiente a vel accusantium, rerum tempore modi sit repellendus dolores.
					Voluptatibus, voluptas! Quia reiciendis suscipit quod aliquam, optio repellat at quo quis? Commodi
					quos tempore quae quo facilis cupiditate dolor delectus eligendi necessitatibus iste sapiente,
					similique, reprehenderit, incidunt nihil pariatur error a! Porro, soluta magnam earum illo dolor
					ratione repellat expedita consequatur optio, esse dolorem corrupti placeat eos architecto delectus
					praesentium similique vero dolore provident ut? Sint, hic. Consequatur nobis optio officia. Numquam
					iure natus culpa omnis, excepturi ab facilis possimus maiores, consequuntur iusto quam, deserunt
					quasi dolorum! Ab beatae corrupti rerum qui culpa reprehenderit eveniet ducimus! Molestiae illum
					inventore placeat facere. Beatae, labore sapiente amet doloribus nisi odit officiis iure! Temporibus
					possimus inventore dolorem ullam quidem voluptas eum asperiores, sequi omnis tempore libero fuga
					magnam. Consequuntur enim modi incidunt nam tempore? Hic, omnis iste repellendus fugit amet commodi
					quis, ut optio architecto consequatur voluptatum laboriosam velit suscipit possimus illum repellat
					quibusdam saepe libero atque? Facere ratione eveniet itaque, saepe modi ea? Amet reprehenderit
					voluptates velit ex deserunt tenetur, ut, alias est reiciendis eum ipsa ullam dolor natus sit
					perspiciatis blanditiis nihil magni. Et sed harum in ipsam similique pariatur rerum soluta! Corporis
					repudiandae quod inventore aut veritatis laudantium officiis doloremque tempora nisi ea repellendus
					nobis quasi et perspiciatis dolorem eligendi, neque obcaecati doloribus accusantium. Qui labore
					beatae facilis id ad officia! Porro eum harum aspernatur, excepturi iste explicabo quibusdam ex
					minima velit reprehenderit debitis, aliquam consequatur repellendus praesentium, quo odit omnis
					deleniti. Voluptatum a adipisci voluptate velit rem autem veritatis quod. Repellat alias aut fuga
					ipsa, quasi error accusantium, ipsum maxime dignissimos pariatur commodi. Veritatis cum accusamus
					nulla aut libero similique, harum praesentium dignissimos voluptates sequi quam cupiditate
					doloribus, eaque alias? Ex nobis esse dolorum incidunt veniam deleniti ea accusantium libero sunt
					sit aut labore voluptatem autem, blanditiis natus aspernatur? Delectus deleniti odit voluptatem enim
					assumenda laborum odio illum iure saepe.
				</p>
			</div>
		</section>
	);
};

export default Home;
