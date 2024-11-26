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
import favyImg from "./assets/favy.png";
import githubIcon from "./assets/github.svg";
import groupReserverImg from "./assets/group-reserve.png";
import instagramIcon from "./assets/instagram.svg";
import jaiziImg from "./assets/jaizi.png";
import libBoocaImg from "./assets/lib-booca.png";
import linkedinIcon from "./assets/linkedin.svg";
import favyLogo from "./assets/favy-logo.svg";
import myImage from "./assets/my-image.jpg";
import { skills } from "./skillsList";
import ftmLogo from "./assets/ftm.png";
import phoneIcon from "./assets/phone.svg";
import telegramIcon from "./assets/telegram.svg";

export default function Home() {
  return (
    <>
      <Navbar className="h-[10vh]">
        <NavbarBrand></NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
        <main className="max-w-2xl flex justify-between m-auto ">
          <Image
            src={myImage}
            alt="my-image"
            className="w-[15rem] h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-center ms-3">
            <h2 className="text-[2rem]">سلام</h2>
            <h1 className="text-[3rem]">محمد صادق خدادادی</h1>
            <h2 className="text-[1.3rem]">
              هستم. مهندس نرم افزار و دوستدار خلاقیت!
            </h2>
            <div className="flex mt-4 gap-4">
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

        <div
          className="grid grid-cols-4 gap-4 [&>*]:bg-red-300"
          style={{ gridTemplateRows: "repeat(2, 15rem)" }}
        >
          <ProjectCard
            className="row-span-2"
            alt="favy"
            src={favyImg}
            link="https://favy.ir/"
            title="فیوی"
          />

          <ProjectCard
            className="col-span-2"
            alt="lib booca"
            src={libBoocaImg}
            link="https://library.booca.ir/"
            title="بوکا"
          />
          <ProjectCard
            alt="group reserver"
            src={groupReserverImg}
            link="https://r.m-aqsa.ir/"
            title="سامانه رزرو گروهی"
          />

          <Card isFooterBlurred radius="md" className={`border-none `}>
            <Image
              alt={"ftm"}
              className={`object-contain object-top h-3/4 `}
              src={ftmLogo}
            />
            <CardFooter className="justify-between bottom-0 gap-1 rounded-none py-1 absolute   shadow-small  z-10">
              <Link href={""}>
                <Button variant="light" className="text-lg font-bold">
                  FTM{" "}
                  <span className="italic text-sm font-normal">
                    - مدیریت فایل با تگ
                  </span>
                </Button>
              </Link>
              <Button color="primary">توضیحات</Button>
            </CardFooter>
          </Card>

          <ProjectCard
            className="col-span-2 "
            alt="jaizi"
            src={jaiziImg}
            link="https://app.jaizi.ir/"
            title="جایزی"
          />
        </div>
      </section>

      <section className="px-8 py-10 mt-10 bg-black" id="skills">
        <h1 className="text-3xl mt-2 mb-8 text-white">مهارت ها</h1>

        <div className="flex">
          <div className="w-1/3 ">
            <h2 className="text-xl text-white mb-3">مهارت های کلی</h2>

            <Chip
              className="mb-2 p-4 py-6 text-2xl"
              color="warning"
              size="lg"
              variant="shadow"
            >
              طراحی و برنامه نویسی سایت
            </Chip>
            <Chip
              className="mb-2 p-4 py-6 text-2xl"
              color="warning"
              size="lg"
              variant="shadow"
            >
              برنامه نویسی موبایل
            </Chip>
            <Chip
              className="mb-2 p-4 py-6 text-2xl"
              color="warning"
              size="lg"
              variant="shadow"
            >
              برنامه نویسی Front End
            </Chip>
          </div>

          <div className="w-1/3">
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

          <div className="w-1/3">
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
          <Link href={"mailto:m.s.khodadadei@gmail.com"}>
            m.s.khodadadei@gmail.com
          </Link>
          <Image src={phoneIcon} className="w-8 h-8" alt="phone" />
          <Link dir="ltr" className="text-end" href={"tel:+989383367195"}>
            +98-9383367195
          </Link>
          <Image src={telegramIcon} className="w-8 h-8" alt="telegram" />
          <Link
            dir="ltr"
            className="text-end"
            href={"https://t.me/m_s_khodadadei"}
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
}: {
  title: string;
  className?: string;
  imgClassName?: string;
  alt: string;
  src: any;
  link: string;
}) {
  return (
    <Card
      isFooterBlurred
      radius="md"
      className={`border-none ${className ?? ""}`}
    >
      <Image
        alt={alt}
        className={`object-cover object-top ${imgClassName ?? ""}`}
        src={src}
      />
      <CardFooter className="justify-between bottom-0 gap-1 rounded-none py-1 absolute   shadow-small  z-10">
        <Link href={link}>
          <Button variant="light" className="text-lg font-bold">
            {title}
          </Button>
        </Link>
        <Button color="primary">توضیحات</Button>
      </CardFooter>
    </Card>
  );
}
