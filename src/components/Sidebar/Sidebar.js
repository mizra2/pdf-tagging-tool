import { Box, useStyleConfig } from "@chakra-ui/react";
import SidebarView from "./SidebarView";
import useNav from "../../hooks/use-navigator";
import SidebarEdit from "./SidebarEdit";

const Sidebar = ({
	addStoryHandler,
	editHandler,
	saveChangesHandler,
	pageNumber,
	onSubmit,
	editExistingHandler,
	isLoading,
	isSubmitLoading
}) => {

	const styles = useStyleConfig("sidebarStyleConfig");
	const headerType = useNav();
	return (
		<Box __css={styles}>
			{headerType === "view" && (
				<SidebarView
					addStoryHandler={addStoryHandler}
					editHandler={editHandler}
					saveChangesHandler={saveChangesHandler}
					pageNumber={pageNumber}
					headerType={headerType}
					editExistingHandler={editExistingHandler}
					isLoading={isLoading}
				/>
			)}
			{headerType === "edit" && (
				<SidebarEdit onSubmit={onSubmit} headerType={headerType} isSubmitLoading={isSubmitLoading} />
			)}
		</Box>
	);
};

export default Sidebar;
