import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapicuaDetectorComponent } from './capicua-detector.component';

describe('CapicuaDetectorComponent', () => {
  let component: CapicuaDetectorComponent;
  let fixture: ComponentFixture<CapicuaDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapicuaDetectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapicuaDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
