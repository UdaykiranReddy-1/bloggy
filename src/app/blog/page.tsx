import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleCard from "../../components/BlogPage/TitleCard";
import Link from "next/link";

type TableOfContentsItem = {
    id: string;
    title: string;
};

const Blog: React.FC = () => {

    const tableOfContents: TableOfContentsItem[] = [
        { id: "smtp-intro", title: "Do you really need an SMTP server?" },
        { id: "pros-cons", title: "Pros and cons of a local SMTP server" },
        { id: "requirements", title: "Requirements for a local SMTP server" },
        { id: "quick-setup", title: "Quick SMTP server setup" },
    ];

    return (
        <>
            <Header />
            <div className="min-h-screen max-w-6xl mx-auto mt-16">
                <TitleCard />
                <div className="max-w-7xl mx-auto mt-8 flex gap-8 p-4">
                    {/* Table of Contents */}
                    <aside
                        id="table-of-contents"
                        className="hidden self-start sticky top-8 md:block md:w-1/4"
                    >
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                            <ul className="space-y-2">
                                {tableOfContents.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className="text-blue-600 hover:underline block"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Blog Content */}
                    <article className="flex-1 bg-white p-6 rounded-lg shadow text-justify">
                        <section id="smtp-intro" className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">
                                Do you really need an SMTP server?
                            </h2>
                            <p>
                                Using an outgoing SMTP server is the traditional method of sending
                                emails. It gives you more control over deliverability and is a must-have
                                for businesses handling transactional emails.
                            </p>
                        </section>

                        <section id="pros-cons" className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">
                                Pros and cons of a local SMTP server
                            </h2>
                            <p>
                                While setting up a local SMTP server can save costs, it may not offer
                                the reliability and scalability of cloud-based solutions.
                            </p>
                        </section>

                        <section id="requirements" className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">
                                Requirements for a local SMTP server
                            </h2>
                            <p>
                                To set up a local SMTP server, you’ll need software like Postfix,
                                Sendmail, or Microsoft Exchange, and sufficient technical knowledge.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cumque laboriosam, voluptatem deserunt in ducimus. Quisquam aspernatur tenetur doloribus, culpa dignissimos facilis mollitia accusamus ad ex? Quos possimus debitis libero totam? Iste a quasi earum tempore, exercitationem quas, dignissimos autem nulla ullam vero architecto in voluptas optio. Ab cupiditate facilis quam quos nam tempora, reiciendis aliquid architecto optio praesentium beatae? Sapiente delectus, ab, ullam, illum voluptatem culpa natus itaque voluptatibus magni adipisci ad vel. Non error natus autem est reprehenderit animi in amet nostrum doloremque nihil modi praesentium voluptatem ipsam itaque, mollitia, ratione repudiandae veniam dolore dignissimos at repellat magnam! Corporis iste iure ex. Molestiae hic magnam ipsum dolore. Illum expedita fugit debitis? Doloremque fuga, vero ex nostrum cupiditate accusantium consectetur officia quam in veritatis quia distinctio optio eos at corporis tempore similique incidunt consequatur provident ab obcaecati quae quibusdam labore. Maiores, veniam? In doloribus enim praesentium nesciunt dicta nostrum nihil beatae similique. Vel maxime exercitationem amet dicta quae qui. Nostrum officiis nesciunt est saepe, natus sunt expedita hic doloribus quos recusandae quaerat tenetur ipsam ab aut, eaque enim ut! Maxime, et totam impedit sed eligendi ad autem ea voluptatibus, recusandae commodi magnam soluta accusamus ut officiis laudantium, consequuntur velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem ab neque nesciunt voluptate modi tempora quis est quaerat aperiam consequatur enim impedit cupiditate veritatis animi, sequi dicta commodi sed, dolores quibusdam blanditiis nostrum odio fugit! Ipsam nostrum veritatis qui nesciunt eligendi quas asperiores, laudantium reprehenderit id porro quibusdam eveniet provident error quos facere neque ut velit minus quam. Distinctio obcaecati harum, quae natus impedit consequatur et vel temporibus. Tempore numquam omnis pariatur ut veritatis eveniet consequatur soluta nulla iste voluptate minus, nostrum libero eaque excepturi, voluptas in repellendus. Perspiciatis, aspernatur odit nihil nostrum excepturi dignissimos illum maxime ipsa voluptatibus!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, totam itaque. Nostrum et sunt qui nemo autem, recusandae minus sint odio, error doloremque est dolorum perspiciatis ipsam corporis ullam esse similique reiciendis nihil enim eos in? Alias facilis nam, fugiat unde incidunt eaque, laudantium possimus labore accusamus tempore perspiciatis enim eligendi, nisi expedita necessitatibus sequi aperiam nesciunt vel in culpa illo maiores iste hic ipsum. Modi, sint blanditiis, velit quis ipsum veniam dolorum similique aut nihil voluptatibus doloribus unde rem corrupti necessitatibus culpa? Officia ducimus expedita numquam eveniet rerum hic, ut quae quo aliquid nostrum et eius placeat quia? Praesentium.
                            </p>
                        </section>

                        <section id="quick-setup" className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">
                                Quick SMTP server setup
                            </h2>
                            <p>
                                Follow these steps to quickly configure your SMTP server on various
                                platforms, such as macOS, Linux, or Windows.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ad, at ab expedita nostrum nisi quam corrupti quibusdam obcaecati atque neque consequuntur optio suscipit ullam ipsa, omnis dolorem, modi dignissimos laborum quod a repellendus? Facere possimus, ex nostrum earum provident dolor labore fugit eaque consequuntur dolorem fuga sequi quaerat beatae dignissimos qui adipisci dolorum numquam magnam laborum sunt soluta corporis. Voluptate quos quidem commodi sunt itaque? Placeat minus quia voluptatibus iste amet facere delectus excepturi in, nisi debitis culpa ipsam veritatis, quo dolore? Facilis eveniet iusto sed nesciunt sequi repudiandae explicabo ab, placeat id ullam animi, accusamus tempora cumque itaque.
                            </p>
                        </section>
                    </article>
                </div>

                {/* Back to Home */}
                <div className="text-center my-8">
                    <Link href="/" className="text-blue-600 hover:underline">
                        ← Back to Home
                    </Link>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum suscipit aperiam explicabo culpa dolores aspernatur iure magnam exercitationem dolore corporis corrupti officia vel asperiores quidem eum voluptatibus laborum consectetur ipsam nam, id ullam. Dignissimos quos nam dolores beatae? Laboriosam iure rem, magnam, voluptates aut ab, neque nesciunt rerum repellendus fugit perspiciatis qui ea illo accusantium! Dolorum adipisci voluptates odio quia nostrum laudantium molestias commodi praesentium minima nulla vel voluptatibus tempora quisquam, deserunt fuga doloremque eos mollitia, quis provident illum sint harum numquam sequi! Dicta ea fugiat mollitia adipisci perferendis? Repudiandae dolore quisquam nulla maxime dicta provident optio error libero.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus perferendis tempore ducimus ullam, quo non laborum porro, amet officia architecto nobis, praesentium saepe. Alias, eveniet! Dolore commodi reprehenderit, qui dolor ipsa et provident! Assumenda alias, praesentium at voluptates voluptas consequuntur, deserunt, ea consectetur dolorum ipsa nemo eius mollitia minima et. Sit, eveniet! Delectus perspiciatis sint ullam magni mollitia dolores repellendus sequi quia quasi officia, odit, consequuntur asperiores quae itaque quos deserunt inventore. Tenetur cupiditate veniam obcaecati sint repellat odit similique debitis error iure beatae nostrum aut, consectetur minima suscipit tempore autem soluta consequatur fugiat impedit. Architecto sit possimus quisquam, alias iste repellendus ut iusto optio perspiciatis eaque quos harum cumque tempora, omnis, necessitatibus magni illum nostrum! Aspernatur in esse excepturi voluptatum natus doloribus voluptas error quia minus totam accusamus tempore sed facilis iure, quos eos qui molestiae laboriosam non eum. Est iure reiciendis impedit dolores. Illo, minima nisi, cum illum veniam qui ab repudiandae temporibus perferendis debitis obcaecati, expedita inventore ipsam vero culpa. Repudiandae alias, dolores rem animi illum dolore asperiores eveniet blanditiis sint, necessitatibus eaque voluptates pariatur fugit assumenda corrupti aliquam et. Numquam sunt distinctio dolorum consequuntur. Adipisci natus commodi explicabo perferendis deserunt odio ipsa placeat ut cupiditate aut, consequatur inventore error, vitae ea est fuga molestias aliquid quas reprehenderit magnam. Mollitia aliquid adipisci consectetur at voluptates dicta tempore quo expedita, accusantium quibusdam vel quis ea, repellendus tempora. Nemo iste suscipit minus aspernatur laboriosam cum. Rem temporibus eveniet molestiae enim aliquam, minima iure adipisci consequatur ipsa iusto aspernatur officia ducimus repellendus, sed sit. Ut recusandae asperiores rerum. Aperiam, aspernatur, laboriosam laborum iste libero quia, reiciendis eligendi dicta nulla maiores saepe ipsum? Quod voluptate magni minima, eaque voluptates sapiente officiis similique mollitia nobis aliquam quisquam repudiandae facere deserunt reprehenderit nemo nisi excepturi blanditiis nesciunt iure, neque molestias tempore consectetur non necessitatibus! Suscipit similique a exercitationem corrupti eaque voluptatem! Cupiditate odit in, animi consequuntur fuga facere! Doloremque consequuntur dolorem distinctio corrupti vero dicta? Eaque voluptas et nisi, quaerat doloremque laboriosam commodi id, cum recusandae fuga, ea optio dolorem dolores numquam vero voluptate itaque delectus perspiciatis. Quaerat laboriosam et eum sint consequatur eveniet vel amet repudiandae ipsum voluptas enim quae modi, itaque ipsam, expedita voluptatum at porro excepturi quod facilis corrupti! Accusamus temporibus dolorum tenetur exercitationem. Veritatis saepe quae, assumenda explicabo possimus inventore corporis impedit iusto, magni illum ut veniam libero laborum ad voluptates. Quae similique delectus amet omnis aliquam dolor fugiat facilis perferendis harum. Consectetur facilis corporis ipsam dolore cum illo quas, excepturi modi at nobis dicta laborum, beatae dolores vel. Ea eveniet provident odio nulla, quia illo maxime a neque magnam est, tenetur labore consequuntur. Consequuntur impedit, fuga error commodi numquam sunt dolore totam ullam earum! Laborum quidem molestiae quas magni, officiis velit temporibus nam alias asperiores ducimus, excepturi ut placeat aliquam. Culpa officiis corrupti officia quia! Accusantium delectus, autem ipsum quam sapiente voluptatibus magnam ex eum harum, exercitationem amet saepe. Similique perferendis quaerat dolorem sint culpa? Quisquam quo distinctio temporibus nam beatae laboriosam necessitatibus iusto corrupti, tempora quis?
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;


