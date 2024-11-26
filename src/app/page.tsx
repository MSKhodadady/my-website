"use client";

import {
  Button,
  Card,
  CardFooter,
  Chip,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import emailIcon from "./assets/email.svg";
import favyLogo from "./assets/favy-logo.svg";
import favyImg from "./assets/favy.png";
import ftmLogo from "./assets/ftm.png";
import githubIcon from "./assets/github.svg";
import groupReserverImg from "./assets/group-reserve.png";
import instagramIcon from "./assets/instagram.svg";
import jaiziImg from "./assets/jaizi.png";
import libBoocaImg from "./assets/lib-booca.png";
import linkedinIcon from "./assets/linkedin.svg";
import myImage from "./assets/my-image.jpg";
import phoneIcon from "./assets/phone.svg";
import telegramIcon from "./assets/telegram.svg";
import closeIcon from "./assets/close.svg";
import { skills } from "./skillsList";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar className="h-[10vh]">
        <NavbarBrand></NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Link color="foreground" href="#projects">
              پروژه ها
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#skills" aria-current="page">
              مهارت ها
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#contact">
              راه های ارتباط
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" />
      </Navbar>

      <div className="min-h-[90vh] flex items-center justify-center">
        <main className="max-w-2xl flex justify-between m-auto  flex-col lg:flex-row">
          <Image
            src={myImage}
            alt="my-image"
            className="mx-auto w-[15rem] h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-center ms-3 mt-4 lg:mt-0">
            <h2 className="text-[2rem]">سلام</h2>
            <h1 className="text-[3rem] text-center lg:text-start">
              محمد صادق خدادادی
            </h1>
            <h2 className="text-[1.3rem]">
              هستم. مهندس نرم افزار و دوستدار خلاقیت!
            </h2>
            <div className="flex mt-4 gap-4 justify-center lg:justify-start">
              <Button
                variant="light"
                className="p-2 min-h-fit min-w-fit"
                as={Link}
                href="https://www.linkedin.com/in/m-s-khodadadei/"
                target="_blank"
              >
                <Image src={linkedinIcon} className="w-8 h-8 " alt="linkedin" />
              </Button>
              <Button
                variant="light"
                className="p-2 min-h-fit min-w-fit"
                as={Link}
                href=""
                target="_blank"
              >
                <Image
                  src={instagramIcon}
                  className="w-8 h-8"
                  alt="instagram"
                />
              </Button>
              <Button
                variant="light"
                className="p-2 min-h-fit min-w-fit"
                as={Link}
                href="https://github.com/mskhodadady/"
                target="_blank"
              >
                <Image src={githubIcon} className="w-8 h-8" alt="github" />
              </Button>

              <Button
                variant="light"
                className="p-2 min-h-fit min-w-fit"
                as={Link}
                href="https://favy.ir/u/sadeq_main"
                target="_blank"
              >
                <Image src={favyLogo} className="w-8 h-8" alt="favy" />
              </Button>
            </div>
          </div>
        </main>
      </div>

      <section className="mx-8 mt-20" id="projects">
        <h1 className="text-3xl mb-8">پروژه ها</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 [&>*]:bg-red-300 auto-rows-[15rem]">
          <ProjectCard
            className="lg:row-span-2"
            alt="favy"
            src={favyImg}
            link="https://favy.ir/"
            title="فیوی"
            desc="جایی برای به اشتراک گذاشتن علایق با دوستانتان 😉"
          />

          <ProjectCard
            className="lg:col-span-2"
            alt="lib booca"
            src={libBoocaImg}
            link="https://library.booca.ir/"
            title="بوکا"
            desc="این سایت برای استارت آپ اسکیدمی طراحی شده و هدف آن، فروش و مطالعه آنلاین کتاب می باشد، مانند پلتفرم های طاقچه، فیدیبو و ..."
          />
          <ProjectCard
            alt="group reserver"
            src={groupReserverImg}
            link="https://r.m-aqsa.ir/"
            title="رزرو گروهی"
            desc="این سایت برای مجموعه اردوئی اقصی تهیه شده و امکان رزرو گروهی برای زمان ها و خدمات مختلف را برای مجموعه ها فراهم می کند."
          />

          <ProjectCard
            alt="ftm"
            link="https://github.com/MSKhodadady/ftm_flutter"
            title="FTM"
            src={ftmLogo}
            desc="این اپ، قابلیت مدیریت فایل ها را با تگ و بدون پوشه بندی های تو در تو و گیج کننده فراهم می کند. این اپ ویندوز، اندروید و لینوکس قابل استفاده است."
            />

          <ProjectCard
            className="lg:col-span-2 "
            alt="jaizi"
            src={jaiziImg}
            link="https://app.jaizi.ir/"
            title="جایزی"
            desc="این وبسایت متعلق به مجموعه جایزی می باشد و تغییرات و بهبودهای زیادی توسط اینجانب روی آن صورت گرفته است."
          />
        </div>
      </section>

      <section className="px-8 py-10 mt-10 bg-black" id="skills">
        <h1 className="text-3xl mt-2 mb-8 text-white">مهارت ها</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row gap-4 lg:gap-0">
          <div>
            <h2 className="text-xl text-white mb-3">مهارت های کلی</h2>

            <Chip
              className="mb-2 p-4 py-6 text-xl"
              color="warning"
              size="lg"
              variant="shadow"
            >
              طراحی و برنامه نویسی سایت
            </Chip>
            <Chip
              className="mb-2 p-4 py-6 text-xl"
              color="warning"
              size="lg"
              variant="shadow"
            >
              برنامه نویسی موبایل
            </Chip>
            <Chip
              className="mb-2 p-4 py-6 text-xl"
              color="warning"
              size="lg"
              variant="shadow"
            >
              برنامه نویسی Front End
            </Chip>
          </div>

          <div>
            <h2 className="text-xl text-white mb-3">لیست مهارت ها</h2>
            {skills.map((i, index) => (
              <Chip
                key={index}
                size="lg"
                color="primary"
                variant="shadow"
                className="me-2 mb-2"
              >
                {i}
              </Chip>
            ))}
          </div>

          <div>
            <h2 className="text-xl text-white mb-3">رزومه</h2>

            <div className="flex">
              <Button
                as={Link}
                target="_blank"
                href="https://docs.google.com/document/d/1Yng7uScr361DRNELSntzY7d_wd9VxmK6Lk4bKfNKm5o/edit?usp=sharing"
                color="success"
                variant="bordered"
                className="text-white m-auto"
                size="lg"
              >
                رزومه فارسی
              </Button>

              <Button
                as={Link}
                target="_blank"
                href="https://docs.google.com/document/d/1y3b1TBAxpB1ObjQ7JscjqfDMyrQMjH8c4Tv1F_Cj5jI/edit?usp=sharing"
                color="success"
                variant="bordered"
                className="text-white m-auto"
                size="lg"
              >
                رزومه انگلیسی
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-black " id="contact">
        <h1 className="text-3xl mt-2 mb-8 text-white">راه های ارتباطی</h1>

        <div
          className="grid text-white gap-2 items-center"
          style={{ gridTemplateColumns: "2rem 1fr" }}
        >
          <Image src={emailIcon} className="w-8 h-8" alt="email" />
          <Link href={"mailto:m.s.khodadadei@gmail.com"} target="_blank">
            m.s.khodadadei@gmail.com
          </Link>
          <Image src={phoneIcon} className="w-8 h-8" alt="phone" />
          <Link
            dir="ltr"
            className="text-end"
            href={"tel:+989383367195"}
            target="_blank"
          >
            +98-9383367195
          </Link>
          <Image src={telegramIcon} className="w-8 h-8" alt="telegram" />
          <Link
            dir="ltr"
            className="text-end"
            href={"https://t.me/m_s_khodadadei"}
            target="_blank"
          >
            t.me/m_s_khodadadei
          </Link>
        </div>
      </section>
    </>
  );
}

function ProjectCard({
  className,
  imgClassName,
  alt,
  src,
  link,
  title,
  desc,
}: {
  title: string;
  className?: string;
  imgClassName?: string;
  alt: string;
  src: any;
  link: string;

  desc: string;
}) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Card
      isFooterBlurred
      radius="md"
      className={`border-none ${className ?? ""}`}
    >
      <Image
        alt={alt}
        className={`object-cover h-full  object-top ${imgClassName ?? ""}`}
        src={src}
      />
      {/* footer */}
      <CardFooter className="absolute z-10 bottom-0 py-1  justify-between  gap-1 rounded-none    shadow-small ">
        <Link href={link} target="_blank">
          <Button variant="light" className="text-lg font-bold">
            {title}
          </Button>
        </Link>
        <Button color="primary" onClick={() => setShowDesc(true)}>
          توضیحات
        </Button>
      </CardFooter>
      {/* desc */}

      <div
        className={`absolute top-0 right-0 z-40 w-full ${
          showDesc ? "min-h-full p-3 overflow-y-scroll" : "min-h-0 h-0 overflow-hidden"
        }   backdrop-blur-3xl	transition-all`}
      >
        <div className="flex justify-between">
          <span className="text-lg font-bold">{title}</span>

          <Button
            variant="light"
            className="min-w-fit w-fit p-3"
            onClick={() => setShowDesc(false)}
          >
            <Image alt="close" src={closeIcon} className="w-6 h-6" />
          </Button>
        </div>

        <div className="w-full h-full mt-2">{desc}</div>
      </div>
    </Card>
  );
}
