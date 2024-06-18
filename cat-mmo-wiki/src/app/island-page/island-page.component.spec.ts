import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandPageComponent } from './island-page.component';

describe('IslandPageComponent', () => {
  let component: IslandPageComponent;
  let fixture: ComponentFixture<IslandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslandPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
