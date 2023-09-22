import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCreatComponent } from './nft-creat.component';

describe('NftCreatComponent', () => {
  let component: NftCreatComponent;
  let fixture: ComponentFixture<NftCreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftCreatComponent]
    });
    fixture = TestBed.createComponent(NftCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
