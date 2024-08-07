import Image from "next/image"

const sections = [
  {
    title: "Home",
    image:
      "https://private-user-images.githubusercontent.com/40373628/353599328-294c0aba-a266-4e47-ac09-47c6c6392941.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMwNjkxMzAsIm5iZiI6MTcyMzA2ODgzMCwicGF0aCI6Ii80MDM3MzYyOC8zNTM1OTkzMjgtMjk0YzBhYmEtYTI2Ni00ZTQ3LWFjMDktNDdjNmM2MzkyOTQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA3VDIyMTM1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE3ZDJiMWUzYmEzMWQyMDkyZWE1NTBmZjZjMmIzODA4YTI4ZGY3MDg5NjQ1YTM2MGIwNGFhYTgxMzU0NGY5OTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9hHcbK6-GtbNBFE_btJrsc3hfBgFrVyewaGinRqYTZg",
  },
  {
    title: "Checkout",
    image:
      "https://private-user-images.githubusercontent.com/40373628/355983995-90918879-715f-4d5f-b141-a07df1e3436d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMwNjkxMzAsIm5iZiI6MTcyMzA2ODgzMCwicGF0aCI6Ii80MDM3MzYyOC8zNTU5ODM5OTUtOTA5MTg4NzktNzE1Zi00ZDVmLWIxNDEtYTA3ZGYxZTM0MzZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA3VDIyMTM1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM2ZTc3NjI0OTI3NWNmNDNjZjg3NDMyZGRiZDg3NTc4ZDZjNzJjMTY4YmYzZTBjNjRiODg0NGZhMTY1MTg1MmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.EJhj5Nh8g-pUskCc_Y65ostJIDfQBFe3LiPFHqVoLvQ",
  },
]

export const ProjectSections = () => {
  return (
    <section className="container my-2 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 ">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={"imagem da tela de " + section.title}
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
