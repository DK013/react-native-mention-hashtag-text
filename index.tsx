import React from "react";
import { Text } from "react-native";
import { MentionHashtagTextViewProps, MentionProps } from "./index.d";

const MentionHashtagTextView = ({
	mentionHashtagPress = () => {},
	mentionHashtagColor = "black",
	children,
	style = {},
	onPress = () => {},
	numberOfLines = 0,
	ellipsizeMode = "tail",
	className = "",
}: MentionHashtagTextViewProps) => {
	const prepareText = (
		children: MentionHashtagTextViewProps["children"],
		mentionHashtagPress: MentionHashtagTextViewProps["mentionHashtagPress"],
		mentionHashtagColor: MentionHashtagTextViewProps["mentionHashtagColor"]
	) => {
		const result = [];

		// Helper function to safely extract text content
		const getTextContent = (child: React.ReactNode): string | null => {
			if (typeof child === "string") {
				return child;
			} else if (React.isValidElement(child) && child.props.children) {
				return typeof child.props.children === "string" ?
						child.props.children
					:	null;
			}
			return null;
		};

		let textContent = getTextContent(children);
		const mentList = textContent?.match(/[@#][a-z0-9_\.]+/gi);

		if (!mentList) {
			return [textContent] || [""];
		}

		let lastIndex = 0;
		for (let i = 0; i < mentList.length; i++) {
			const ment = mentList[i];
			const currentIndex = textContent!.indexOf(ment, lastIndex);

			// Add text before mention
			if (currentIndex > lastIndex) {
				result.push(textContent!.substring(lastIndex, currentIndex));
			}

			// Add mention component with unique key
			result.push(
				<Mention
					key={`mention-${i}-${currentIndex}`}
					mentionHashtagColor={mentionHashtagColor}
					mentionHashtagPress={mentionHashtagPress}
					text={ment}
				/>
			);

			lastIndex = currentIndex + ment.length;
		}

		// Add remaining text
		if (lastIndex < textContent!.length) {
			result.push(textContent!.substring(lastIndex));
		}

		return result;
	};

	return (
		<Text
			style={style}
			onPress={onPress}
			numberOfLines={numberOfLines}
			ellipsizeMode={ellipsizeMode}
			className={className}>
			{prepareText(children, mentionHashtagPress, mentionHashtagColor)}
		</Text>
	);
};

const Mention = (props: MentionProps) => {
	return (
		<Text
			style={{
				color: props.mentionHashtagColor
			}}
			onPress={() => {
				if (props.mentionHashtagPress) {
					props.mentionHashtagPress(props.text);
				}
			}}>
			{props.text}
		</Text>
	);
};

export default MentionHashtagTextView;
