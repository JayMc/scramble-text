scramble-text jQuery plugin
===========================

Given a text string replaces characters until the mouse hovers over the text revealing the real text.
Text can be scrambled in different ways: swap, shuffle, reverse, redact.

## Usage

```
<div class="words">the quick brown fox jumps over the lazy dog</div>

<script>
$(".words").scramble({
		type: 'redact',
		redactChar: '!',
		words: ['dog', 'fox']
	})
</script>
```
Outputs:
__the quick brown xbo jumps over the lazy wbe__
Note: fox and dog are scrambled
When the user moves the mouse over the text it reveals: __the quick brown fox jumps over the lazy dog__

## Options
### type: 
- swap (default): swaps each character in the same position in hashmap
- shuffle: randomizes characters (changes each time the mouse is moved over the text)
- reverse: characters in reverse order
- redact: blocks out all characters with the same character

### hashmap:
Used with swap type to replace character in position.

### words:
The words to scramble, if left empty will scramble all words.

### redactChar:
The character to use in redact, default is question mark.