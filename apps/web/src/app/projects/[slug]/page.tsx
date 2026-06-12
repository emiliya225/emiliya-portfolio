import type { Metadata } from "next";
import type { LucideProps } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { metadata as meta } from "@/app/config";
import { project } from "@/app/source";
import ZoomableImage from "@/components/case-study/zoomable-image";
import { MDXLink } from "@/lib/mdx/default-components";
import { createMetadata } from "@/lib/metadata";
import { MDXContent } from "@content-collections/mdx/react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Eye,
  Lightbulb,
  Mail,
  PenTool,
  Repeat2,
  Rocket,
  Table2,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  Workflow,
} from "lucide-react";

import Header from "./header";

export function generateStaticParams({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // @ts-expect-error issue with fumadocs
  return project.generateParams([slug]);
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const page = project.getPage([slug]);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: "article",
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`,
          type: "image/png",
        },
      ],
      authors: meta.author.name,
    },
    twitter: {
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`,
        },
      ],
    },
  }) satisfies Metadata;
}

const getProjectTime = (date: unknown) => {
  const parsedDate = date instanceof Date ? date : new Date(String(date));
  return parsedDate.getTime();
};

export default async function ProjectPage(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const { slug } = params;

  const page = project.getPage([slug]);

  if (!page) notFound();

  const {
    data: { body },
  } = page;

  const otherProjects = [...project.getPages()]
    .filter((projectPage) => projectPage.slugs[0] !== slug)
    .sort((a, b) => getProjectTime(b.data.date) - getProjectTime(a.data.date));

  return (
    <main className="flex-1 bg-background text-foreground">
      <div className="container mx-auto px-4 py-14 md:px-6">
        <Header metadata={page.data} />

        <Image
          src={`/images/projects/${slug}/cover.jpg`}
          width={1280}
          height={832}
          alt={`Image of ${page.data.title}`}
          className="my-12 aspect-video h-auto w-full rounded-2xl object-cover"
          priority
        />

        <article className="mx-auto max-w-none">
          <MDXContent
            code={body}
            components={{
              a: MDXLink,
              ZoomableImage,
              IconAlert: (props: LucideProps) => <AlertCircle {...props} />,
              IconArrowRight: (props: LucideProps) => <ArrowRight {...props} />,
              IconBuilding: (props: LucideProps) => <Building2 {...props} />,
              IconChart: (props: LucideProps) => <BarChart3 {...props} />,
              IconCheck: (props: LucideProps) => <CheckCircle2 {...props} />,
              IconEye: (props: LucideProps) => <Eye {...props} />,
              IconLightbulb: (props: LucideProps) => <Lightbulb {...props} />,
              IconMail: (props: LucideProps) => <Mail {...props} />,
              IconPenTool: (props: LucideProps) => <PenTool {...props} />,
              IconRepeat: (props: LucideProps) => <Repeat2 {...props} />,
              IconRocket: (props: LucideProps) => <Rocket {...props} />,
              IconTable: (props: LucideProps) => <Table2 {...props} />,
              IconTarget: (props: LucideProps) => <Target {...props} />,
              IconTrendingUp: (props: LucideProps) => <TrendingUp {...props} />,
              IconUsers: (props: LucideProps) => <Users {...props} />,
              IconUsersRound: (props: LucideProps) => <UsersRound {...props} />,
              IconWorkflow: (props: LucideProps) => <Workflow {...props} />,
            }}
          />
        </article>

        {otherProjects.length > 0 && (
          <section className="mx-auto max-w-7xl border-t border-border pt-16">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70">
                  More Work
                </div>

                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">
                  Next project
                </h2>
              </div>

              <Link
                href="/projects"
                className="hidden text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70 transition hover:text-foreground md:block"
              >
                View all
              </Link>
            </div>

            <div className="flex snap-x gap-4 overflow-x-auto pb-6">
              {otherProjects.map((projectPage) => (
                <Link
                  key={projectPage.url}
                  href={projectPage.url}
                  className="group min-w-[82%] snap-start overflow-hidden rounded-3xl bg-card shadow-sm transition hover:-translate-y-1 md:min-w-[420px]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={`/images/projects/${projectPage.slugs[0]}/cover.jpg`}
                      width={900}
                      height={560}
                      alt={`Image of ${projectPage.data.title}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />

                    <div className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
                      <ArrowRight className="size-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                      {projectPage.data.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-base leading-7 text-muted-foreground">
                      {projectPage.data.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {projectPage.data.tags?.slice(0, 3).map((tag, index) => (
                        <span
                          key={`${projectPage.url}-tag-${index}`}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}