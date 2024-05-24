import TrackingConfiguration from './trackingService';

describe('TrackingConfiguration test', () => {
  it('should have a tracking configuration with views and events', () => {
    expect(TrackingConfiguration.views).toBeDefined();
    expect(TrackingConfiguration.events).toBeDefined();
    expect(TrackingConfiguration.enabled).toBeDefined();
    expect(TrackingConfiguration.enabled).toBe(false);
  });
});
