import React, { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface MentionHashtagTextViewProps {
	children: ReactNode | string;
	mentionHashtagPress?: (text: string) => void;
	mentionHashtagColor?: string;
	style?: StyleProp<TextStyle>;
	ellipsizeMode?: "head" | "middle" | "tail" | "clip";
	onPress?: () => void;
	className?: string;
	numberOfLines?: number;
}

export interface MentionProps {
	mentionHashtagPress?: (text: string) => void;
	mentionHashtagColor?: string;
	text: string;
}