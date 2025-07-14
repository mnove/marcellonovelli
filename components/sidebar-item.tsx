import { Badge } from "@/components/ui/badge";

export const SidebarItem = ({
  name,
  isInProgress = false,
  isAlpha = false,
  isNew = false,
}: {
  name: string;
  isInProgress: boolean;
  isNew: boolean;
  isAlpha: boolean;
}) => {
  return (
    <span className="flex w-full items-center justify-between">
      <span>{name}</span>
      {isInProgress && (
        <Badge
          variant="outline"
          className="grow-0 border-purple-500/50 text-purple-500"
        >
          WIP
        </Badge>
      )}
      {isNew && (
        <Badge
          variant="outline"
          className="grow-0 border-teal-500/50 text-teal-500"
        >
          New
        </Badge>
      )}
      {isAlpha && (
        <Badge
          variant="secondary"
          className="grow-0 border-yellow-500/50 text-yellow-500"
        >
          Alpha
        </Badge>
      )}
    </span>
  );
};
