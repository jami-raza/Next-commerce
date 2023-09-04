import PortableText from "react-portable-text"

const RichText = ({ portableTextContent }:any) => (
  <div>
    <PortableText
      // Pass in block content straight from Sanity.io
      content={portableTextContent}
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props:any) => <h1 style={{ color: "red" }} {...props} />,
        li: ({ children }:any) => <li className="special-list-item">{children}</li>,
        someCustomType: RichText,
      }}
    />
  </div>
)

export default RichText