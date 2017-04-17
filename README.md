# React Native Image Placeholder

> Load images incrementally to provide a better UX Edit

# Examples

## Multiple Images.

![](https://raw.githubusercontent.com/mitogh/react-native-image-placeholder/master/img/multiple.gif)

```js
render() {
  return (
    <View style={styles.container}>
      <ImageLoader 
        style={styles.item}
        src='https://s3.amazonaws.com/crisoforo.com/airplane.jpg' 
        thumbnail='https://s3.amazonaws.com/crisoforo.com/airplane-mini.jpg'
      />
      <ImageLoader 
        style={styles.item}
        duration={3000}
        src='https://s3.amazonaws.com/crisoforo.com/flowers.jpg' 
        thumbnail='https://s3.amazonaws.com/crisoforo.com/flowers-small.jpg'
      />
      <ImageLoader 
        style={styles.item}
        duration={1000}
        src='https://s3.amazonaws.com/crisoforo.com/sun.jpg' 
        thumbnail='https://s3.amazonaws.com/crisoforo.com/sun-small.jpg'
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item: {
    flex: 1,
  }
});
```

## Single Image.

![](https://raw.githubusercontent.com/mitogh/react-native-image-placeholder/master/img/single.gif)

```js
<ImagePlaceholder 
  style={{ flex: 1 }}
  duration={1000}
  activityIndicatorProps={{
    size: 'large',
    color: 'green',
  }}
  src='https://s3.amazonaws.com/crisoforo.com/flowers.jpg' 
  placeholder='https://s3.amazonaws.com/crisoforo.com/flowers-small.jpg'
  />
);
```

