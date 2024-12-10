![example](https://raw.githubusercontent.com/uzaysan/react-native-mention-hashtag-text/main/screenshot.jpg)

# Install

    npm i react-native-mention-hashtag-text

# Install for Expo

    npx expo install react-native-mention-hashtag-text

# Usage

    import  MentionHashtagTextView  from  "react-native-mention-hashtag-text";

    <MentionHashtagTextView
        mentionHashtagPress={mentionHashtagClick}
        mentionHashtagColor={"#ff0000"}
        >
        This is a text with a @mention and #hashtag. You can add more @mentions like @john @foe or #hashtags like #ReactNative
    </MentionHashtagTextView>

## Props

| Prop               | Type                    | Default     | Description                                                       |
|--------------------| ------------------------| ------------| ------------------------------------------------------------------|
| children (Required)          | string                  | -           | Text content or component containing @mentions and #hashtags      |
| mentionHashtagPress| (text: string) => void  | () => {}    | Callback triggered when a mention or hashtag is pressed            |
| mentionHashtagColor| string                  | "black"     | Color for mentions and hashtags                                   |
| style              | TextStyle               | {}          | Style object for the text component                               |
| onPress            | () => void              | () => {}    | Callback for when the text is pressed                              |
| numberOfLines      | number                  | 0           | Number of lines to show (0 means no limit)                        |
| ellipsizeMode      | "head" \| "middle" \| "tail" \| "clip" | "tail"  | How text should be truncated                           |
| className          | string                  | ""          | Additional class name for styling                                 |

## License

ISC License (ISC)
Copyright 2021 @uzaysan

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
