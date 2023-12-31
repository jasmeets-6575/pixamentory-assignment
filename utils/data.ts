export interface DataType {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
}

export const tempData: DataType = {
  latitude: 22.5,
  longitude: 43.375,
  generationtime_ms: 0.03993511199951172,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 961.0,
  hourly_units: {
    time: "iso8601",
    temperature_2m: "°C",
  },
  hourly: {
    time: [
      "2023-09-26T00:00",
      "2023-09-26T01:00",
      "2023-09-26T02:00",
      "2023-09-26T03:00",
      "2023-09-26T04:00",
      "2023-09-26T05:00",
      "2023-09-26T06:00",
      "2023-09-26T07:00",
      "2023-09-26T08:00",
      "2023-09-26T09:00",
      "2023-09-26T10:00",
      "2023-09-26T11:00",
      "2023-09-26T12:00",
      "2023-09-26T13:00",
      "2023-09-26T14:00",
      "2023-09-26T15:00",
      "2023-09-26T16:00",
      "2023-09-26T17:00",
      "2023-09-26T18:00",
      "2023-09-26T19:00",
      "2023-09-26T20:00",
      "2023-09-26T21:00",
      "2023-09-26T22:00",
      "2023-09-26T23:00",
      "2023-09-27T00:00",
      "2023-09-27T01:00",
      "2023-09-27T02:00",
      "2023-09-27T03:00",
      "2023-09-27T04:00",
      "2023-09-27T05:00",
      "2023-09-27T06:00",
      "2023-09-27T07:00",
      "2023-09-27T08:00",
      "2023-09-27T09:00",
      "2023-09-27T10:00",
      "2023-09-27T11:00",
      "2023-09-27T12:00",
      "2023-09-27T13:00",
      "2023-09-27T14:00",
      "2023-09-27T15:00",
      "2023-09-27T16:00",
      "2023-09-27T17:00",
      "2023-09-27T18:00",
      "2023-09-27T19:00",
      "2023-09-27T20:00",
      "2023-09-27T21:00",
      "2023-09-27T22:00",
      "2023-09-27T23:00",
      "2023-09-28T00:00",
      "2023-09-28T01:00",
      "2023-09-28T02:00",
      "2023-09-28T03:00",
      "2023-09-28T04:00",
      "2023-09-28T05:00",
      "2023-09-28T06:00",
      "2023-09-28T07:00",
      "2023-09-28T08:00",
      "2023-09-28T09:00",
      "2023-09-28T10:00",
      "2023-09-28T11:00",
      "2023-09-28T12:00",
      "2023-09-28T13:00",
      "2023-09-28T14:00",
      "2023-09-28T15:00",
      "2023-09-28T16:00",
      "2023-09-28T17:00",
      "2023-09-28T18:00",
      "2023-09-28T19:00",
      "2023-09-28T20:00",
      "2023-09-28T21:00",
      "2023-09-28T22:00",
      "2023-09-28T23:00",
      "2023-09-29T00:00",
      "2023-09-29T01:00",
      "2023-09-29T02:00",
      "2023-09-29T03:00",
      "2023-09-29T04:00",
      "2023-09-29T05:00",
      "2023-09-29T06:00",
      "2023-09-29T07:00",
      "2023-09-29T08:00",
      "2023-09-29T09:00",
      "2023-09-29T10:00",
      "2023-09-29T11:00",
      "2023-09-29T12:00",
      "2023-09-29T13:00",
      "2023-09-29T14:00",
      "2023-09-29T15:00",
      "2023-09-29T16:00",
      "2023-09-29T17:00",
      "2023-09-29T18:00",
      "2023-09-29T19:00",
      "2023-09-29T20:00",
      "2023-09-29T21:00",
      "2023-09-29T22:00",
      "2023-09-29T23:00",
      "2023-09-30T00:00",
      "2023-09-30T01:00",
      "2023-09-30T02:00",
      "2023-09-30T03:00",
      "2023-09-30T04:00",
      "2023-09-30T05:00",
      "2023-09-30T06:00",
      "2023-09-30T07:00",
      "2023-09-30T08:00",
      "2023-09-30T09:00",
      "2023-09-30T10:00",
      "2023-09-30T11:00",
      "2023-09-30T12:00",
      "2023-09-30T13:00",
      "2023-09-30T14:00",
      "2023-09-30T15:00",
      "2023-09-30T16:00",
      "2023-09-30T17:00",
      "2023-09-30T18:00",
      "2023-09-30T19:00",
      "2023-09-30T20:00",
      "2023-09-30T21:00",
      "2023-09-30T22:00",
      "2023-09-30T23:00",
      "2023-10-01T00:00",
      "2023-10-01T01:00",
      "2023-10-01T02:00",
      "2023-10-01T03:00",
      "2023-10-01T04:00",
      "2023-10-01T05:00",
      "2023-10-01T06:00",
      "2023-10-01T07:00",
      "2023-10-01T08:00",
      "2023-10-01T09:00",
      "2023-10-01T10:00",
      "2023-10-01T11:00",
      "2023-10-01T12:00",
      "2023-10-01T13:00",
      "2023-10-01T14:00",
      "2023-10-01T15:00",
      "2023-10-01T16:00",
      "2023-10-01T17:00",
      "2023-10-01T18:00",
      "2023-10-01T19:00",
      "2023-10-01T20:00",
      "2023-10-01T21:00",
      "2023-10-01T22:00",
      "2023-10-01T23:00",
      "2023-10-02T00:00",
      "2023-10-02T01:00",
      "2023-10-02T02:00",
      "2023-10-02T03:00",
      "2023-10-02T04:00",
      "2023-10-02T05:00",
      "2023-10-02T06:00",
      "2023-10-02T07:00",
      "2023-10-02T08:00",
      "2023-10-02T09:00",
      "2023-10-02T10:00",
      "2023-10-02T11:00",
      "2023-10-02T12:00",
      "2023-10-02T13:00",
      "2023-10-02T14:00",
      "2023-10-02T15:00",
      "2023-10-02T16:00",
      "2023-10-02T17:00",
      "2023-10-02T18:00",
      "2023-10-02T19:00",
      "2023-10-02T20:00",
      "2023-10-02T21:00",
      "2023-10-02T22:00",
      "2023-10-02T23:00",
    ],
    temperature_2m: [
      28.5, 27.6, 27.6, 27.2, 27.3, 29.1, 32.6, 35.4, 37.2, 38.4, 38.9, 39.0,
      39.1, 38.8, 38.2, 37.0, 35.3, 33.6, 31.9, 31.1, 31.3, 31.0, 30.3, 29.9,
      29.4, 28.6, 27.9, 27.4, 27.7, 29.9, 32.9, 35.6, 37.4, 38.7, 39.4, 39.4,
      39.2, 38.8, 38.2, 37.1, 35.4, 34.2, 33.0, 31.7, 30.6, 29.8, 29.2, 28.6,
      28.1, 27.7, 27.3, 26.8, 27.1, 29.3, 31.9, 34.1, 35.8, 37.0, 37.8, 38.1,
      38.1, 37.6, 36.9, 36.0, 34.4, 33.1, 32.0, 30.9, 30.3, 29.7, 29.3, 29.0,
      28.6, 27.8, 27.0, 26.9, 28.1, 30.0, 32.0, 33.8, 35.5, 36.8, 37.5, 37.7,
      37.5, 37.0, 36.1, 35.0, 33.7, 32.1, 30.8, 29.9, 29.2, 28.5, 27.8, 27.1,
      26.5, 25.8, 25.3, 25.3, 26.4, 28.1, 30.0, 32.3, 34.7, 36.6, 37.5, 37.9,
      37.9, 37.4, 36.5, 35.5, 34.1, 32.6, 31.6, 29.8, 29.5, 29.2, 28.5, 27.8,
      27.1, 26.4, 25.7, 25.7, 26.8, 28.7, 30.7, 32.7, 34.7, 36.3, 37.1, 37.4,
      37.3, 36.9, 36.2, 35.2, 33.8, 32.2, 30.8, 29.8, 29.0, 28.4, 27.8, 27.4,
      26.9, 25.9, 25.0, 24.8, 26.1, 28.3, 30.4, 32.4, 34.4, 35.9, 36.8, 37.2,
      37.2, 36.8, 36.0, 34.9, 33.6, 32.0, 30.6, 29.6, 28.7, 28.0, 27.3, 26.8,
    ],
  },
};
