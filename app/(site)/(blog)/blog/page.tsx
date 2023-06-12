import { Title } from "@/design-system/index";

export default async function BlogPage() {
  return (
    <div>
      <Title as="h1" intent={"primary"} size={"mainTitle"}>
        Im a blog page
      </Title>
    </div>
  );
}