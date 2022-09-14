import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
const assetsEntityAdapter = createEntityAdapter();

export const fetchMapAssets = createAsyncThunk(
  "assets/fetchAll",
  async (thunkAPI) => {
    const response = await fetch(process.env.REACT_APP_GET_MAP);
    return response.json();
  }
);

export const assetsSlice = createSlice({
  name: "assets",
  initialState: assetsEntityAdapter.getInitialState(),
  reducers: {
    // not use in source
    // removeAllAssets: (state, action) => {
    //     assetsEntityAdapter.removeAll(state);
    // },
    updateOneAssets: (state, action) => {
      assetsEntityAdapter.upsertOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMapAssets.fulfilled, (state, action) => {
      const payload = action.payload.features.map((location) => {
        const data = {};

        const coordinates = location.geometry.coordinates.map((coordinate) => {
          return [coordinate.y, coordinate.x];
        });

        data.id = location.id;
        data.address = location.properties.address;
        data.area = location.properties.area;
        data.date = location.properties.date;
        data.density = location.properties.density;
        data.region = location.properties.region;
        data.karbari = location.properties.karbari;
        data.rgb = location.properties.rgb;
        data.cid = location.properties.id;
        data.coordinates = coordinates;

        return data;
      });
      assetsEntityAdapter.upsertMany(state, payload);
    });
  },
});

export const { removeAllAssets, updateOneAssets } = assetsSlice.actions;
