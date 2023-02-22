import type { User, Changelog } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Changelog } from "@prisma/client";

export function getChangelog({
  id,
  userId,
}: Pick<Changelog, "id"> & {
  userId: User["id"];
}) {
  return prisma.changelog.findFirst({
    select: { id: true, content: true, title: true },
    where: { id, userId },
  });
}

export function getChangelogListItems({ userId }: { userId: User["id"] }) {
  return prisma.changelog.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createChangelog({
  content,
  title,
  userId,
}: Pick<Changelog, "content" | "title"> & {
  userId: User["id"];
}) {
  return prisma.changelog.create({
    data: {
      title,
      content,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteChangelog({
  id,
  userId,
}: Pick<Changelog, "id"> & { userId: User["id"] }) {
  return prisma.changelog.deleteMany({
    where: { id, userId },
  });
}
