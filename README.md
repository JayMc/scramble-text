scramble-text jQuery plugin
===========================

Given a text string replaces characters in different ways: swap, randomize, reverse, redact

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
the quick brown xbo jumps over the lazy wbe

Note: fox and dog are scrambled

## Options
### type: 
- swap (default): swaps each character in the same position in hashmap
- shuffle: randomizes characters (changes each time the mouse is moved over the text)
- reverse: characters in reverse order
- redact: blocks out all characters with the same character

### hashmap:
used with swap type to replace character in position

### words:
the words to scramble, if left empty will scramble all words.

### redactChar
the character to use in redact, default is question mark.