import Image from "next/image"

export interface VideoStory {
  id: string
  title: string
  speaker: string
  location: string
  thumbnail: string
}

const FIELD_VIDEOS: VideoStory[] = [
  {
    id: "farmer-talk",
    title: "Farmer Ground Talk: Field Mechanization",
    speaker: "Farmo Field Team with Ramesh Patil",
    location: "Karmala Cluster",
    thumbnail: "/farmo-farmer-interview.jpg",
  },
  {
    id: "partner-fleet",
    title: "Partner Story: Fleet Utilization & Growth",
    speaker: "Farmo Team with Suresh Shinde (Fleet Owner)",
    location: "Solapur Hub",
    thumbnail: "/farmo-force-partner.jpg",
  },
  {
    id: "labor-ops",
    title: "Cluster Dispatch: Field Labor Operations",
    speaker: "Farmo Operations & Rural Harvest Crew",
    location: "Karjat Hub",
    thumbnail: "/farmo-workers-field.jpg",
  },
]

export function VideoSection() {
  return (
    <section className="mx-auto max-w-[1500px] border-t border-border px-5 py-14 sm:px-8 lg:px-12">
      <h2 className="mb-8 text-4xl tracking-tight sm:text-5xl">Farmo in the field</h2>
      <div className="grid gap-7 md:grid-cols-3">
        {FIELD_VIDEOS.map((story) => (
          <figure key={story.id}>
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image src={story.thumbnail} alt="" fill sizes="(min-width:768px) 32vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-4 border-b border-border pb-4">
              <h3 className="font-serif text-2xl">{story.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{story.speaker} · {story.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
