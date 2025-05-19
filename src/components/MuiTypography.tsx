import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      {/* subtitle */}
      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>
      {/* body */}
      <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Ratione illo esse saepe eligendi, natus labore
          qui voluptatum corporis quisquam nemo. Dignissimos, ad illum!
           Cumque unde consequuntur voluptate ex, eveniet sed?</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Perspiciatis reprehenderit nisi praesentium
          consequatur sunt deleniti! Eligendi saepe sed fuga tempore,
           veniam ut sapiente atque voluptatum exercitationem vel ad
            praesentium! Recusandae.</Typography>
    </div>
  );
}

export default MuiTypography;