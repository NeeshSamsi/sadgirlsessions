import { config, fields } from "@keystatic/core"

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "sadgirlsessions/sadgirlsessions",
  },

  ui: {
    brand: {
      name: "Sad Girl Sessions",
    },
  },

  singletons: {
    settings: {
      label: "Site Settings",
      path: "src/data/settings",
      schema: {
        url: fields.url({
          label: "Site URL",
          description: "Hosted domain of Sad Girl Sessions",
          validation: { isRequired: true },
        }),
        metaTitle: fields.text({
          label: "Metadata Site Title",
          description:
            "The title of the website. Appears in the browser tab, search results and when shared on social media.",
          validation: { isRequired: true },
        }),
        metaDescription: fields.text({
          label: "Metadata Site Description",
          description:
            "The description of the website. Appears in search results and when shared on social media.",
          multiline: true,
          validation: { isRequired: true },
        }),

        instagram: fields.url({
          label: "Instagram URL",
          description: "Link to your instagram.",
          validation: { isRequired: true },
        }),
      },
    },

    contactForm: {
      label: "Contact Form Settings",
      path: "src/data/contact-form",
      schema: {
        heading: fields.text({
          label: "Heading",
          description: "The heading of the contact form.",
          validation: { isRequired: true },
        }),
        nameLabel: fields.text({
          label: "Name Label",
          description: "The label for the name field.",
          validation: { isRequired: true },
        }),
        namePlaceholder: fields.text({
          label: "Name Placeholder",
          description: "The placeholder for the name field.",
          validation: { isRequired: true },
        }),
        emailLabel: fields.text({
          label: "Email Label",
          description: "The label for the email field.",
          validation: { isRequired: true },
        }),
        emailPlaceholder: fields.text({
          label: "Email Placeholder",
          description: "The placeholder for the email field.",
          validation: { isRequired: true },
        }),
        messageLabel: fields.text({
          label: "Message Label",
          description: "The label for the message field.",
          validation: { isRequired: true },
        }),
        messagePlaceholder: fields.text({
          label: "Message Placeholder",
          description: "The placeholder for the message field.",
          validation: { isRequired: true },
        }),
        submitText: fields.text({
          label: "Submit Button Text",
          description: "The call to action text for the submit button.",
          validation: { isRequired: true },
        }),
        submitLoadingText: fields.text({
          label: "Submit Button Loading Text",
          description:
            "The text for the submit button when sending the message.",
          validation: { isRequired: true },
        }),
      },
    },

    buttons: {
      label: "Interactive Button Links",
      path: "src/data/buttons",
      schema: {
        buttons: fields.array(
          fields.object({
            text: fields.text({
              label: "Text",
              validation: { isRequired: true },
            }),
            url: fields.url({
              label: "URL",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Buttons",
            itemLabel(props) {
              return props.fields.text.value
            },
          },
        ),
      },
    },
  },
})
