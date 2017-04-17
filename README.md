# React Native Image Placeholder

> Load images incrementally to provide a better UX Edit

If you want to download larger images but provide with a nice transition while the users are waiting
for the image you can provide with a smaller version of the image (as [you can see on the
  examples](#examples)).

This is inspired on how [medium](https://medium.com) loads the articles and the `iron-image` component
from the [polymer](https://www.webcomponents.org/element/PolymerElements/iron-image) library works
by providing the option to present the larger image and give to the user a hint of the presence of
an image, specially on slower connections.

# Examples

## Multiple Images.

![](https://raw.githubusercontent.com/mitogh/react-native-image-placeholder/master/img/multiple.gif)

```js
render() {
  return (
    <View style={styles.container}>
      <ImagePlaceholder 
        style={styles.item}
        src='https://s3.amazonaws.com/crisoforo.com/airplane.jpg' 
        thumbnail='https://s3.amazonaws.com/crisoforo.com/airplane-mini.jpg'
      />
      <ImagePlaceholder 
        style={styles.item}
        duration={3000}
        src='https://s3.amazonaws.com/crisoforo.com/flowers.jpg' 
        thumbnail='https://s3.amazonaws.com/crisoforo.com/flowers-small.jpg'
      />
      <ImagePlaceholder 
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

