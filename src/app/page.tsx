'use client'
import Navbar from "@/components/Navbar";
import { Accordion, AccordionItem, Button, ButtonGroup, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link as LinkNextUi, useDisclosure } from "@nextui-org/react";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'remixicon/fonts/remixicon.css'

export default function Home() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()


    const menuItems = [
        {
            link: "/",
            title: "Home"
        },
        {
            link: "#create",
            title: "Create"
        },
        {
            link: "/about",
            title: "About us"
        },
    ];

    return (

        <>
            <Navbar />
            <main className='container h-full w-full max-w-screen-xl mx-auto'>

                {/* JUMBOTRON */}
                <section className="min-h-[100svh] flex flex-col justify-center items-center gap-y-6">

                    <div className="h-full flex flex-col justify-center items-center flex-1 self-stretch gap-y-10 px-6 pt-24">
                        <div className="text-center grid items-stretch gap-y-2">
                            <p className="uppercase">Virtuship is a place to</p>
                            <h1 className="text-5xl capitalize">Diverse Ways to Date <span className='text-transparent bg-clip-text bg-gradient-to-br from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end'>Invites</span></h1>
                            <p className="text-neutral">Buat alur lingkugan romantis dan akrab untuk mendukung ajakan kencanmu.</p>
                        </div>
                        <div className="flex gap-2 justify-center">
                            <Button className="capitalize bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end" as={Link} href="#create" >Create environtment</Button>
                            <Button className="capitalize" color="secondary" variant="flat" as={Link} href="/michelle"><span className='text-transparent bg-clip-text bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end'>try demo</span></Button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center self-stretch">
                        <Image
                            src={'/assets/images/landingpage/propose.webp'}
                            alt="Proposing"
                            width={1620}
                            height={1080}
                            className="w-11/12 h-fit"
                            priority
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                    </div>
                </section>

                {/* DESCRIPTION */}
                <section className="px-6 py-20 grid gap-5">
                    <Image
                        src={'/assets/images/landingpage/description.webp'}
                        alt="Feature"
                        width={699}
                        height={655}
                        quality={100}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />

                    <div className="grid gap-y-6">
                        <p className="uppercase"><span className='text-transparent bg-clip-text bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end'>share to your crush</span></p>
                        <h2 className="text-3xl">Berikan kepadanya pengalaman berbeda dari sebelumnya</h2>
                        <p className="text-neutral">Sebuah lingkungan pendukung ajakan kencanmu. Biarkan doi mengeksplorasi bersama dengan rasa penasarannya hingga membalas ajakanmu. </p>
                        <div>
                            <Button className="capitalize bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end" as={Link} href="#create" >Create environtment</Button>
                        </div>
                    </div>
                </section>

                {/* FEATURE */}
                <section className="px-6 py-20 grid gap-y-14">

                    <div className="grid gap-y-2">
                        <div className="flex items-center gap-x-6">
                            <div className="rounded-full h-9 w-9 grid items-center justify-items-center bg-gradient-to-br from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end">
                                <Image
                                    src={'/assets/images/landingpage/icon/360-degrees.png'}
                                    alt="360 views"
                                    width={512}
                                    height={512}
                                    className="mt-1.5 h-6 w-6"
                                    quality={100}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                                />
                            </div>
                            <h3 className="text-xl">Lingkungan interaktif</h3>
                        </div>
                        <p className="text-neutral">Buat gebetanmu mengeksplorasi lingkungan 360 derajat media viewer dengan pengalaman berbeda dan unik sebagai bentuk ajakan kencanmu.</p>
                    </div>
                    <div className="grid gap-y-2">
                        <div className="flex items-center gap-x-6">
                            <div className="rounded-full h-9 w-9 grid items-center justify-items-center bg-gradient-to-br from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end">
                                <Image
                                    src={'/assets/images/landingpage/icon/conversations.png'}
                                    alt="Answer"
                                    width={512}
                                    height={512}
                                    className="h-6 w-6"
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                                />
                            </div>
                            <h3 className="text-xl">Dapatkan jawaban doi</h3>
                        </div>
                        <p className="text-neutral">Terima jawaban dari ajakanmu melalui whatsapp sepanjang gebetanmu mengeksplorasi lingkungan hingga akhir sesi.</p>
                    </div>
                    <div className="grid gap-y-2">
                        <div className="flex items-center gap-x-6">
                            <div className="rounded-full h-9 w-9 grid items-center justify-items-center bg-gradient-to-br from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end">
                                <i className="ri-user-line ri-xl text-white"></i>
                            </div>
                            <h3 className="text-xl">Ciptakan ajakan personal</h3>
                        </div>
                        <p className="text-neutral">Buat kesan personal ajakanmu dengan memasukkan prompt ajakan pada update kami selanjutnya.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="px-6 py-20 grid gap-y-20">
                    <div className="grid gap-y-6">
                        <h2 className="capitalize text-4xl">Frequently Asked Questions</h2>
                        <p className="text-neutral">Have a question that is not answered? You can contact us at <Link className="inline-block underline" href={'mailto:support@virtuwed.id'}>support@virtuwed.id</Link>.
                        </p>
                    </div>

                    <Accordion variant="splitted" style={{ paddingLeft: 0, paddingRight: 0 }} className="grid gap-y-4">
                        <AccordionItem
                            key="1"
                            aria-label="Accordion 1"
                            title="What is Virtuship and how does it work?"
                            indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
                            <p className="text-neutral">
                                Virtuship is a unique online platform designed to facilitate diverse and romantic date invitations. Users can create personalized and intimate environments to enhance their dating experiences.
                            </p>
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Accordion 2"
                            title="How can I use Virtuship to plan a romantic date?"
                            indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl "></i> : <i className="ri-subtract-line ri-xl "></i>)} >
                            <p className="text-neutral">
                                Simply enter your crush name on Virtuship create menu, explore various features to create a romantic setting, and send an invitation to your date. The platform provides tools to customize the persuasive date invitation and make your date invitation special.
                            </p>
                        </AccordionItem>
                        <AccordionItem
                            key="3"
                            aria-label="Accordion 3"
                            title="Can I invite someone on Virtuship even if they don't have an account?"
                            indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
                            <p className="text-neutral">
                                Yes, you can send an invitation to someone even if they don't have a Virtuship account. The platform provides options for guests to access an invitation date without requiring a full account setup.
                            </p>
                        </AccordionItem>
                        <AccordionItem
                            key="4"
                            aria-label="Accordion 3"
                            title="What kind of virtual settings can I create on Virtuship?"
                            indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
                            <p className="text-neutral">
                                Virtuship offers a range of virtual environments, from campuss environtment to scenic landscapes. Users can customize the ambiance, invitation, and other elements to match their preferences and create a memorable setting.
                            </p>
                        </AccordionItem>
                        <AccordionItem
                            key="5"
                            aria-label="Accordion 3"
                            title="Are there any subscription plans or costs associated with Virtuship?"
                            indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
                            <p className="text-neutral">
                                Virtuship offers both free and premium features. While basic functions are accessible without charge, premium subscriptions unlock additional customization options and exclusive features to enhance the overall dating invite experience.
                            </p>
                        </AccordionItem>

                    </Accordion>
                </section>

                {/* CREATE ENVIRONTMENT */}
                <section id="create" className="px-6 py-20">

                    <div
                        style={{ boxShadow: '0 0 12px rgba(215, 109, 119, 0.5)' }}
                        className="relative bg-[#070707f2] p-10 rounded-lg border-2 border-secondary grid gap-y-4">
                        <h2 className="text-3xl">Create Environtment</h2>
                        <p className="text-neutral">Ajak kencan gebetan anda dengan cara berbeda dan spesial.</p>

                        <Formik
                            initialValues={{ crush: '' }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    // alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <ButtonGroup>
                                        <Input
                                            type="text"
                                            name="crush"
                                            className="font-sans"
                                            placeholder="Crush name"
                                            onChange={handleChange}
                                            // onBlur={handleBlur}
                                            value={values.crush}
                                            radius="none"
                                            variant="bordered"
                                            labelPlacement='outside-left'
                                        />
                                        <Button onPress={onOpen} type="submit" className="bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end" disabled={isSubmitting}>
                                            <p>Create</p>
                                        </Button>
                                    </ButtonGroup>
                                    <Modal scrollBehavior='inside' isOpen={isOpen} onOpenChange={onOpenChange}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1"><h3 className="text-xl">{values.crush != '' ? "Your Virtuship is ready🎉" : "No crush detected⚠️"}</h3></ModalHeader>
                                                    <ModalBody>
                                                        {
                                                            values.crush != ''
                                                                ? <>
                                                                    <p className="text-neutral">Now just copy the link and share with the person. don&apos;t shy and wish you all the best.</p>
                                                                    <p className="text-neutral">also you can take look from <Link className="underline text-sky-500" href={`/${values.crush.toLowerCase().replace(/\s+/g, '-')}`}>here</Link> before sharing it.</p>
                                                                </>
                                                                : <p className="text-neutral">It seems the crush name is still empty. Fill in your crush name to create your Virtuship environment.</p>
                                                        }

                                                    </ModalBody>
                                                    {values.crush != ''
                                                        ? <ModalFooter className="w-full">
                                                            <Input
                                                                isDisabled
                                                                type="text"
                                                                variant="bordered"
                                                                className="max-w-sm font-sans"
                                                                labelPlacement='outside'
                                                                defaultValue={`virtuship.hasnat.fun/${values.crush.toLowerCase().replace(/\s+/g, '-')}`}
                                                            />
                                                            <CopyToClipboard
                                                                text={`virtuship.hasnat.fun/${values.crush.toLowerCase().replace(/\s+/g, '-')}`}>
                                                                <Button isIconOnly className="bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end" aria-label="Like">
                                                                    <i className="ri-file-copy-line ri-xl"></i>
                                                                </Button>
                                                            </CopyToClipboard>
                                                        </ModalFooter>
                                                        : null
                                                    }

                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>

                                </form>
                            )}
                        </Formik>

                        {/* <Image
                            src={'/assets/images/landingpage/island.png'}
                            alt="Feature"
                            width={512}
                            height={512}
                            quality={100}
                            className="absolute w-32 h-auto bottom-0 right-6"
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        /> */}
                    </div>



                </section>


            </main >

            <footer className="grid px-6 pt-16 pb-6 bg-secondary/20 border-t border-white/10">
                <div className="mb-16">
                    <Link href={'/'} className="inline-flex items-center gap-x-2">
                        <Image
                            src={'/assets/images/logo/virtuship-white.png'}
                            alt="Feature"
                            width={40}
                            height={40}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                        <h2 className="text-4xl">Virtuship</h2>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-16">
                    <div className="grid content-start gap-y-4">
                        <h4 className="text-lg">Product</h4>
                        <ul className="grid gap-y-4 text-secondary">
                            <li><Link href={'/michelle'}>Virtuship</Link></li>
                        </ul>
                    </div>

                    <div className="grid content-start gap-y-6">
                        <h4 className="text-lg">Company</h4>
                        <ul className="grid gap-y-4 text-secondary">
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'mailto:support@virtuwed.id'}>Contact Us<i className="ri-arrow-right-up-line"></i></Link></li>
                        </ul>
                    </div>

                    <div className="grid content-start gap-y-6">
                        <h4 className="text-lg">Follow us</h4>
                        <ul className="grid gap-y-4 text-secondary">
                            <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'https://www.linkedin.com/company/virtuwed/'}>LinkedIn<i className="ri-arrow-right-up-line"></i></Link></li>
                            <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'https://instagram.com/virtuwed'}>Instagram<i className="ri-arrow-right-up-line"></i></Link></li>
                            <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'https://www.youtube.com/@virtuwed'}>Youtube<i className="ri-arrow-right-up-line"></i></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16">
                    <p className="text-sm text-center text-neutral">© 2023 Virtuship. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}