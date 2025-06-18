import { Experience } from "@/data/experience";
import { Card } from "fumadocs-ui/components/card";
import { BuildingIcon } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">{experience.title}</h2>
      <p className="text-lg font-semibold mb-1">{experience.company}</p>
      <p className="text-sm text-muted-foreground mb-1">{experience.period}</p>
      <p className="text-sm text-muted-foreground">({experience.location})</p>

      <Card
        icon={<BuildingIcon />}
        title={experience.company}
        href={experience.companyUrl}
      >
        {experience.description}
      </Card>

      <ul className="list-disc list-inside mt-4 space-y-2">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-sm">
            {responsibility}
          </li>
        ))}
      </ul>

      <hr className="my-6 border-gray-200" />
    </div>
  );
};
