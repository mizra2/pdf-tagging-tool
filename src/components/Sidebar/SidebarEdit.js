import { Button, Center } from "@chakra-ui/react"
import SidebarHeader from "./SidebarHeader";

const SidebarEdit = ({ onSubmit, headerType, isSubmitLoading }) => {
	return (
		<>
			<SidebarHeader headerType={headerType} />
			<div id="my-quill-toolbar">
				<div className="text">
					TEXT
				</div>
				<div className="frame">
					<select className="ql-font">
						<option value="selected"></option>
						<option value="serif"></option>
						<option value="monospace"></option>
					</select>
					<div className="divider"></div>
					<select className="ql-size">
						<option value="small"></option>
						<option value></option>
						<option value="large"></option>
						<option value="huge"></option>
					</select>
				</div>

				<div className="four-frame">
					<button className="ql-bold">Bold</button>
					<div className="small-divider"></div>
					<button className="ql-italic">Italic</button>
					<div className="small-divider"></div>
					<button className="ql-underline">Underline</button>
					<div className="small-divider"></div>
					<button className="ql-strike">Strikethrough</button>
				</div>
				<div className="text">
					ALIGN
				</div>
				<div className="four-frame">
					<button className="ql-list" value="ordered">
						List
					</button>
					<div className="small-divider"></div>
					<button className="ql-list" value="bullet">
						Bullet
					</button>
					<div className="small-divider"></div>
					<button className="ql-indent" value="+1" type="button">
						Right
					</button>
					<div className="small-divider"></div>
					<button className="ql-indent" value="-1" type="button">
						Left
					</button>
				</div>
				<div className="four-frame">
					<button className="ql-align" value="center"></button>
					<div className="small-divider"></div>

					<button className="ql-align" value="justify"></button>
					<div className="small-divider"></div>
					<button className="ql-align" value=""></button>
					<div className="small-divider"></div>
					<button className="ql-align" value="right"></button>
				</div>
				<div className="text">
					OTHER
				</div>
				<div className="four-frame">
					<button className="ql-link">Link</button>
					<div className="small-divider"></div>
					<button className="ql-image">Image</button>
					<div className="small-divider"></div>

					<select className="ql-color">
					</select>
					<div className="small-divider"></div>

					<button className="ql-blockquote"></button>
				</div>
			</div>
			<Center mt="auto" width={"100%"} bottom={"100px"} pos={"absolute"}>
				<Button
					size="lg"
					colorScheme="orange"
					width={"90%"}
					backgroundColor="rgba(254, 133, 78, 1)"
					_hover={{
						backgroundColor: "rgba(254, 133, 78, 0.8)"
					}}
					onClick={onSubmit}
					isLoading={isSubmitLoading}
					fontFamily='Outfit'>Submit</Button>
			</Center>
		</>
	);
};

export default SidebarEdit;