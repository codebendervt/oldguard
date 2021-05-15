

const block = (text,link = undefined) => {
    const content = {
        object: "block",
        type: "paragraph",
        paragraph: {
            text: [
                {
                    type: "text",
                    text: {
                        content: text,
                        link: link
                    }
                }
            ]
        }
    }

    return content

}

export default block;