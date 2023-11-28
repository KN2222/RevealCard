# Use this code to delay the show animation of the text inside the children of the square card

```tsx
const [fadeIn, setFadeIn] = useState(false);

useEffect(() => {
  // When active becomes true, set the fadeIn state to true after a short delay (to allow time for the other animations)
  if (active) {
    setTimeout(() => setFadeIn(true), 1000);
  } else {
    // If active becomes false, set fadeIn to false immediately
    setFadeIn(false);
  }
}, [active]);
```

## Example

```tsx
<div className={`${fadeIn ? 'opacity-100 h-max' : 'opacity-0 h-0'} `}>
  // ...your code here
</div>
```
