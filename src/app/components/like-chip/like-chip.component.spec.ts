import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LikeChipComponent } from './like-chip.component';

describe('LikeChipComponent', () => {
  let component: LikeChipComponent;
  let fixture: ComponentFixture<LikeChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeChipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
