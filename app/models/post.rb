class Post < ApplicationRecord
  belongs_to :user
  belongs_to :tag
  has_many :comments

  validates :title, presence: true, length: { minimum: 8 }
  validates :body, presence: true, length: { minimum: 8, maximum: 500 }
  validates :user_id, presence: true
  validates :tag_id, presence: true
end
