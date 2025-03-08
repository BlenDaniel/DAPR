import React from "react";
import * as Styled from "./styles";
import { IconProps } from "../../components/ui/Icon";
import { SectionTitle } from "../../helpers/definitions";
import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";
import InfoBlock from "../../components/ui/InfoBlock";

interface Contact {
  id: string;
  frontmatter: {
    title: string;
    content: string;
    icon: IconProps;
  };
}

interface ContactInfoProps {
  sectionTitle: SectionTitle;
  contacts: Contact[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  sectionTitle,
  contacts,
}) => {
  return (
    <Container section={true}>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      {contacts.map((item) => (
        <Styled.ContactInfoItem key={item.id}>
          <InfoBlock
            icon={item.frontmatter.icon}
            title={item.frontmatter.title}
            content={item.frontmatter.content}
            center
          />
        </Styled.ContactInfoItem>
      ))}
    </Container>
  );
};

export async function getStaticProps() {
  // Fetch section title data
  const sectionTitleRes = await fetch("/api/contact-section");
  const sectionTitle: SectionTitle = await sectionTitleRes.json();

  // Fetch contacts data
  const contactsRes = await fetch("/api/contacts");
  const contacts: Contact[] = await contactsRes.json();

  return {
    props: {
      sectionTitle,
      contacts,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default ContactInfo;
