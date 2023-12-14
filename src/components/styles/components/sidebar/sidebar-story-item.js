const storyItemStyleConfig = defineStyleConfig({
    baseStyle: {
        display: "flex",
        flexDirection: "row", // <-- Add this line
        w: "418px",
        pl: "80px",
        pt: "30px",
        alignItems: "center",
        gap: "36px",
        flexShrink: 0,
        color: "var(--n-500, #454851)",
        fontFamily: "Outfit",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "28px",
        storyItemText: {
            color: "rgba(69, 72, 81, 1)",
            fontWeight: 400,
            fontSize: 14
        }
    },
});
