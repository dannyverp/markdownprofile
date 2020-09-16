import Link from "next/link";

class Header extends React.Component {
    render() {
        return <header className="p-20 header">
            <section className="flex mb-20">
                <div className="flex flex-col mr-2 justify-center">
                    <span className="rounded blend-screen p-1 bg-white text-black text-bold text-2xl">MP</span>
                </div>
                <h1 className="text-white text-3xl text-semibold">
                    Markdown Profile
                </h1>
            </section>
            <section className="block xl:flex flex-row justify-center items-center">
                <div className="w-full mb-20 xl:mb-0 xl:w-1/2 xl:mr-20 text-center">
                    <img className="m-auto w-full bg-white p-3" src="img/profilebanner.png" alt="Profile page"/>
                </div>
                <div className="flex flex-col flex-1 items-start">
                    <h1 className="text-bold text-white text-3xl">Create your own Markdown Profile</h1>
                    <p className="mt-20 text-xl text-white flex-grow-1">Github allows you to host your own
                        Markdown page as
                        an
                        introduction to your profile. Use the generator below to create your own Github profile
                        template. These templates include features
                        like badges for social media profiles, latest blog posts and other interesting features.
                        These
                        templates will really spice up your profile <span>🔥</span></p>

                    <Link href="#step1" scroll={false}>
                        <button
                            className="mt-20 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 border-b-4 border-orange-700 hover:border-orange-500 rounded text-center focus:outline-none">Get
                            started
                        </button>
                    </Link>
                </div>
            </section>
        </header>;
    }
}

export default Header